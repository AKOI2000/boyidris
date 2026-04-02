import { serverless_url } from "../helpers/constants";

export async function getClients() {
  const res = await fetch(`${serverless_url}/clients`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getWebsiteClients() {
  const res = await fetch(`/api/clients.js`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getClient(id) {
  const res = await fetch(`${serverless_url}/client/edit/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Error fetching the client, try again");

  const data = await res.json();

  return data;
}

export async function addClients(client) {
  const res = await fetch(`${serverless_url}/clients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client: client }),
  });

  if (!res.ok) throw new Error("Couldn't added new client, try again");

  const data = await res.json();

  return data;
}

export async function editClient(id, client) {
  const res = await fetch(`${serverless_url}/client/edit/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client: client }),
  });

  if (!res.ok) throw new Error("Unable to edit the client, try again");

  const data = res.json();

  return data;
}

export async function deleteClient(id) {
  const res = await fetch(`${serverless_url}/client/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Unable to delete");

  const data = res.json();

  return data;
}
