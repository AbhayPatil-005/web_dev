export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "user" && password === "pass123") {
    return new Response("ok", {
      status: 200,
      headers: {
        "Set-Cookie": `auth=1; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Strict`,
      },
    });
  }

  return new Response("Invalid", { status: 401 });
}