import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-80"
      >
        <h2 className="text-xl mb-4 font-bold">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          className="w-full border p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="current-password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2">
          Login
        </button>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-500 underline"
        >
          ← Back to Home
        </button>
      </form>
    </div>
  );
}
