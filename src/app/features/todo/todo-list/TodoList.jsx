import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoItem from "./todo-item/TodoItem";

function TodoList({
  onDelete,
  highPriorities,
  mediumPriorities,
  lowPriorities,
}) {
  return (
    <Row>
      <Col md={4} lg={4}>
        <h5>High Priority List</h5>
        {highPriorities.map((task, index) => (
          <TodoItem onDelete={onDelete} key={index} task={task} />
        ))}
      </Col>
      <Col md={4} lg={4}>
        <h5>Medium Priority List</h5>
        {mediumPriorities.map((task, index) => (
          <TodoItem onDelete={onDelete} key={index} task={task} />
        ))}
      </Col>
      <Col md={4} lg={4}>
        <h5>Low Priority List</h5>
        {lowPriorities.map((task, index) => (
          <TodoItem onDelete={onDelete} key={index} task={task} />
        ))}
      </Col>
    </Row>
  );
}

export default TodoList;
