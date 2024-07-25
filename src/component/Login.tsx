import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { email: storedEmail, password: storedPassword } =
        JSON.parse(storedUser);
      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("token", "your-auth-token"); // Set a token or flag indicating authenticated
        navigate("/todos");
      } else {
        alert("Invalid credentials");
      }
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
