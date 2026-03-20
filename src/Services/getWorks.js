import { serverless_url } from "../helpers/constants";

export async function getWorks() {
  // const res = await fetch(`${serverless_url}/allworks`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });

  const res = await fetch(`/api/works.js`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

// ${serverless_url}/api/works

export async function getWork() {
  // const { slug } = useParams();

  // const res = await fetch(`${serverless_url}/work/${slug}`);

  const res = await fetch(`/api/work.js`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Error fetching work, reload please");
  const data = await res.json();

  return data;
}

// ${serverless_url}/api/work?slug=${slug}
