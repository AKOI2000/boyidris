import { serverless_url } from "../helpers/constants";

export async function getExperiences() {
  // const res = await fetch(`${serverless_url}/experiences`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // });

  const res = await fetch(`/api/experiences.js`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}
