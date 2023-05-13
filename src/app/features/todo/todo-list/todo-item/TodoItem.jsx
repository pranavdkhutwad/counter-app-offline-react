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

function TodoItem({ task, onDelete }) {
  return (
    <Card className={`mt-3 ${getBorderClass(task.priority)}`}>
      <Card.Header>
        <div className="d-flex justify-content-between">
          <Card.Text>{task.name}</Card.Text>
          <div>
            <i className="fa fa-pencil me-3 text-info" aria-hidden="true"></i>
            <i
              onClick={() => onDelete(task.id)}
              className="fa fa-trash text-danger"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
