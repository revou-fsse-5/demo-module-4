import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import TodoList from "./component/TodoList";
import TodoDetail from "./component/TodoDetail";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component

const NotFound: React.FC = () => <h2>404 Not Found</h2>;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/todos" element={<TodoList />} />
            <Route path="/todos/:id" element={<TodoDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
