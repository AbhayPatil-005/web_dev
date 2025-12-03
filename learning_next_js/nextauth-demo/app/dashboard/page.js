"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading…</div>;
  if (!session) return <div>Access denied</div>;

  return (
    <div>
      <h1>Welcome {session.user?.name}</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}