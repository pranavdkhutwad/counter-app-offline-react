import Card from "react-bootstrap/Card";

const getBorderClass = (priority) => {
  switch (priority) {
    case "1": {
      return "border-danger";
    }
    case "2": {
      return "border-warning";
    }
    case "3": {
      return "border-info";
    }
    default: {
      return "";
    }
  }
};

function TodoItem({ task }) {
  return (
    <Card className={`mt-3 ${getBorderClass(task.priority)}`}>
      <Card.Header>
        <Card.Text>{task.name}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
