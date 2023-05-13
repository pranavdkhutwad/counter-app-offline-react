import { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuid } from "uuid";
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import { getTodoCategoriesByPriority } from "./utils";
import { DOMAIN, TODO_ENDPOINT } from "../../constants";

function Todo() {
  const [highPriorityList, setHighPriorityList] = useState([]);
  const [mediumPriorityList, setMediumPriorityList] = useState([]);
  const [lowPriorityList, setLowPriorityList] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateTodoUI = (tasks) => {
    const { highPriorities, mediumPriorities, lowPriorities } =
      getTodoCategoriesByPriority(tasks);

    setHighPriorityList(highPriorities);
    setMediumPriorityList(mediumPriorities);
    setLowPriorityList(lowPriorities);
  };

  const fetchTasks = async () => {
    const { data } = await axios.get(`${DOMAIN}/${TODO_ENDPOINT}`);

    updateTodoUI(data);
  };

  const handleAddTask = async (task) => {
    const newTask = { ...task, id: uuid() };
    await axios.post(`${DOMAIN}/${TODO_ENDPOINT}`, newTask);
    await fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`${DOMAIN}/${TODO_ENDPOINT}/${id}`);
    await fetchTasks();
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
          onDelete={handleDeleteTask}
        />
      </Col>
    </Row>
  );
}

export default Todo;
