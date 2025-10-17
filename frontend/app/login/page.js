"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "admin" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    alert(res.data.message);
  };

  return (
    <div className="bg-white/95 p-10 rounded-lg shadow-lg w-[500px]">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Sign In! Tenacious Sales
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          />
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>
          <div>
            <a href="#" className="text-blue-600">
              Forgot Password?
            </a>{" "}
            |{" "}
            <Link href="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              defaultChecked
              onChange={handleChange}
            />{" "}
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="salesperson"
              onChange={handleChange}
            />{" "}
            Salesperson
          </label>
        </div>

        <button className="bg-blue-600 text-white px-8 py-2 rounded-md w-full hover:bg-blue-700">
          Login
        </button>

        <a href="#" className="block text-center text-sm text-gray-600">
          Resend Activation Link
        </a>
      </form>
    </div>
  );
}
