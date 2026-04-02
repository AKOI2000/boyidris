import { serverless_url } from "../helpers/constants";

export async function handleLogin({ email, password }) {
  const res = await fetch(`${serverless_url}/admin/login`, {
    method: "POST",
    credentials: "include", // important for cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function checkAuth() {
  const res = await fetch(`${serverless_url}/admin/check`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  console.log(data);

  return data;
}
