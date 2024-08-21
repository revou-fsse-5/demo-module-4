import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth(); // Use the login function from context
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const storedUser = localStorage.getItem("user");
    console.log("Stored User:", storedUser); // Log stored user data

    if (storedUser) {
      const { email: storedEmail, password: storedPassword } =
        JSON.parse(storedUser);
      console.log("Entered Email:", email);
      console.log("Stored Email:", storedEmail);
      console.log("Entered Password:", password);
      console.log("Stored Password:", storedPassword);

      if (email === storedEmail && password === storedPassword) {
        login(); // Log the user in using the context
        console.log("Login successful, redirecting...");
        navigate("/todos"); // Redirect to the todos page
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("No registered user found");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
