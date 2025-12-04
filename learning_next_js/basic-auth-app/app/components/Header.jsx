"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {

    let mounted = true;
    fetch("/api/session")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setAuthenticated(!!data.authenticated);
      })
      .catch(() => setAuthenticated(false));
    return () => (mounted = false);
  }, []);

  async function onLogout() {
    const res = await fetch("/api/logout", { method: "POST" });
    if (res.ok) {
      setAuthenticated(false);
      router.push("/login");
    } else {
      alert("Logout failed");
    }
  }

  return (
    <nav style={{ display: "flex", gap: 12, padding: 12 }}>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>

      <div style={{ marginLeft: "auto" }}>
        {authenticated ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}