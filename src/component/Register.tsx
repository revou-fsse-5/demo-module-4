import React from "react";
import RegisterForm from "./RegisterForm";

const Register: React.FC = () => {
  const handleSubmit = (values: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Save user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email: values.email, password: values.password })
    );
    alert("Registration Successful!");
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
