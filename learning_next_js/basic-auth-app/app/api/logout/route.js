export async function POST() {
  return new Response("logged out", {
    status: 200,
    headers: {
      "Set-Cookie": `auth=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict`,
    },
  });
}