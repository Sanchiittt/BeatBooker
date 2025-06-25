



"use client";

import { useState } from "react";
import AdminDashboard from "./AdminDashboard"; // Same folder

const ADMIN_PASSWORD = "goldbeard123"; // Change this

export default function AdminPage() {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("❌ Incorrect password. Access denied.");
    }
  };

  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl shadow-lg w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-yellow-400">
          Admin Login
        </h2>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter Admin Password"
          className="w-full p-3 rounded-lg bg-black border border-yellow-500/30 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg transition"
        >
          Unlock Dashboard
        </button>
      </form>
    </main>
  );
}

