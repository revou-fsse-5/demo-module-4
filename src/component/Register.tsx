import React from "react";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const { register } = useAuth(); // Use the register function from context
  const navigate = useNavigate();

  const handleSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Use the register function from context to save user data in localStorage
    register(values.email, values.password);
    alert("Registration Successful!");
    navigate("/todos"); // Redirect to the todos page after successful registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;
