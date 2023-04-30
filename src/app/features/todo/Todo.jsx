import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";

function Todo() {
  const [highPriorityList, setHighPriorityList] = useState([]);
  const [mediumPriorityList, setMediumPriorityList] = useState([]);
  const [lowPriorityList, setLowPriorityList] = useState([]);

  const handleAddTask = (task) => {
    switch (task.priority) {
      case "1": {
        setHighPriorityList([...highPriorityList, { ...task }]);
        break;
      }
      case "2": {
        setMediumPriorityList([...mediumPriorityList, { ...task }]);
        break;
      }
      case "3": {
        setLowPriorityList([...lowPriorityList, { ...task }]);
        break;
      }
      default: {
        console.log("Invalid priority");
      }
    }
  };
  return (
    <Row>
      <Col md={4} lg={4}>
        <TodoForm onAddTask={handleAddTask} />
      </Col>
      <Col md={8} lg={8}>
        <TodoList
          highPriorities={highPriorityList}
          mediumPriorities={mediumPriorityList}
          lowPriorities={lowPriorityList}
        />
      </Col>
    </Row>
  );
}

export default Todo;
