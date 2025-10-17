"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    countryCode: "",
    contactNo: "",
    promoCode: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      form
    );
    alert(res.data.message);
  };

  return (
    <div className="bg-white/95 p-10 rounded-lg shadow-lg w-[600px]">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Sign Up Now! Tenacious Sales
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          />
        </div>

        <div className="flex space-x-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          />
          <select
            name="country"
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
          >
            <option value="">Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <input
            name="countryCode"
            placeholder="Code"
            onChange={handleChange}
            className="w-1/3 border p-2 rounded-md"
          />
          <input
            name="contactNo"
            placeholder="Contact No"
            onChange={handleChange}
            className="w-1/3 border p-2 rounded-md"
          />
          <input
            name="promoCode"
            placeholder="Promo Code"
            onChange={handleChange}
            className="w-1/3 border p-2 rounded-md"
          />
        </div>

        <button className="bg-blue-600 text-white px-8 py-2 rounded-md w-full hover:bg-blue-700">
          Save
        </button>
        <Link href="/login" className="block text-center text-sm text-gray-600">
          👤 Sign In
        </Link>
      </form>
    </div>
  );
}
