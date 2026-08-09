"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-950 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-gray-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-gray-200"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-white hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}