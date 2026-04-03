import { serverless_url } from "../helpers/constants";

export async function getWorks() {
  const res = await fetch(`${serverless_url}/allworks`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getPaginatedWorks(page) {
  const res = await fetch(`/api/works.js?page=${page}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getWebsiteWork(slug) {
  // const res = await fetch(`${serverless_url}/work/${slug}`);

  const res = await fetch(`/api/work.js/${slug}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Error fetching work, reload please");
  const data = await res.json();

  return data;
}

// ${serverless_url}/api/works

export async function getWork(slug) {
  // const res = await fetch(`${serverless_url}/work/${slug}`);

  const res = await fetch(`${serverless_url}/work/${slug}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Error fetching work, reload please");
  const data = await res.json();

  return data;
}

// ${serverless_url}/api/work?slug=${slug}

export async function createWork(data) {
  const formData = new FormData();

  // text fields
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("category", data.category);

  // images
  Array.from(data.images).forEach((img) => {
    formData.append("images", img);
  });

  const response = await fetch(`${serverless_url}/work/create`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("Upload failed");
  const result = await response.json();

  return result;
}

export async function editWork(slug, data) {
  const res = await fetch(`${serverless_url}/work/edit/${slug}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("error editing the work");
  const response = await res.json();

  return response;
}

export async function deleteWork(slug) {
  const res = await fetch(`${serverless_url}/work/delete/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Unable to delete");
  const data = res.json();

  return data;
}
