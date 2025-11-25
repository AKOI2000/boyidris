import { useNavigate } from "react-router-dom";
import AdminHeading from "../component/AdminHeading";
import AdminExperienceCard from "./AdminExperienceCard";
import { useEffect, useState } from "react";

function Experience() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [experiences, setExperiences] = useState();


  useEffect(()=>{
    async function getExperiences() {
      try {
        setLoading(true);
        const res = await fetch("https://boyidrisbe.onrender.com/experiences", {
          headers: {"Content-Type": "application/json"},
          method: "GET"
        })
        if (!res.ok) throw new Error ("Error fetching the experiences, reload");
        const data = await res.json();
        setExperiences(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getExperiences();
  }, [])

  return (
    <div className="admin-experience">
      <AdminHeading>
        <h1>Experience</h1>
        <p>You have done a lot but it is not enough!!</p>
      </AdminHeading>

      <div className="admin-experience-lists">
        <ul>
         {experiences?.map(experience => (
          <AdminExperienceCard key={experience.id} experience={experience}/>
         ))}
         
        </ul>
      </div>

      <div className="admin-button-box">
        <h5>Got a new experience?</h5>
        <button onClick={()=> navigate("/admin/experience/add")}>Add Experience</button>
      </div>
    </div>
  );
}

export default Experience;
