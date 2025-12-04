"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/products");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}