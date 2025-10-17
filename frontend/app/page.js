"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="bg-white/90 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-semibold mb-4 text-gray-800">
          Welcome to Tenacious Sales
        </h1>
        <p className="text-gray-600 mb-6">Manage your sales team with ease.</p>
        <div className="flex space-x-4 justify-center">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
