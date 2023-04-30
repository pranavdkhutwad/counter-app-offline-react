import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Contact from "./features/contact/Contact";
import Todo from "./features/todo/Todo";
import Header from "./shared/header/Header";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
