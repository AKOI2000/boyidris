import { serverless_url } from "../helpers/constants";

// export async function getExperiences() {
//   // const res = await fetch(`${serverless_url}/experiences`, {
//   //   method: "GET",
//   //   headers: { "Content-Type": "application/json" },
//   // });

//   const res = await fetch(`/api/experiences.js`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (!res.ok) throw new Error("unable to fetch, reload the page");

//   const response = await res.json();

//   return response;
// }

export async function getExperiences() {
  const res = await fetch(`${serverless_url}/experiences`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getWebsiteExperiences() {
  const res = await fetch(`/api/experiences.js`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("unable to fetch, reload the page");

  const response = await res.json();

  return response;
}

export async function getExperience(id) {
  const res = await fetch(`${serverless_url}/experience/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });
  if (!res.ok) throw new Error("Error fetching the experience, try again");
  const data = await res.json();

  return data;
}

export async function addExperiences(experience) {
  const { company, role, dateStart, dateEnd } = experience;

  const res = await fetch(`${serverless_url}/experience/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ company, role, dateStart, dateEnd }),
  });
  if (!res.ok)
    throw new Error(
      "Unable to add the new experience, start the process all over"
    );

  const data = await res.json();

  return data;
}

export async function editExperiences(id, experience) {
  const { company, role, dateStart, dateEnd } = experience;
  console.log(experience);
  const res = await fetch(`${serverless_url}/experience/edit/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ company, role, dateStart, dateEnd }),
  });
  if (!res.ok) throw new Error("Having trouble editing");
  const data = await res.json();

  return data;
}
export async function deleteExperiences(id) {
  const res = await fetch(`${serverless_url}/experience/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Unable to delete");

  const data = await res.json();

  return data;
}
