export async function GET(req) {
  const cookie = req.cookies.get("auth")?.value;
  if (cookie === "1") {
    return new Response(JSON.stringify({ authenticated: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ authenticated: false }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}