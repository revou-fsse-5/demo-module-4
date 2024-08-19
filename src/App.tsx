import "./App.css";

import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import TodoList from "./component/TodoList";
import TodoDetail from "./component/TodoDetail";
import Navbar from "./component/Navbar";
// import ProtectedRoute from "./component/ProtectedRoute"; // Import the ProtectedRoute component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NotFound: React.FC = () => <h2>404 Not Found</h2>;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* localhost:3000 */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* buatkan route untuk register, todolist sama tododetail */}
          <Route path="/todos" element={<TodoList />} />
          {/* kalau kalian mau membuat tododetail */}
          {/* kalian masukin path itu paramsnya apa */}
          <Route path="/todos/:id" element={<TodoDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
