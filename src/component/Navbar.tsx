import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:text-gray-400">
              Register
            </Link>
          </li>
          <li>
            <Link to="/todos" className="text-white hover:text-gray-400">
              Todos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
