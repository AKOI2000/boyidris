import { useNavigate } from "react-router-dom";
import AdminHeading from "../component/AdminHeading";
import AdminExperienceCard from "./AdminExperienceCard";
import { useGetExperiences } from "../Services/useGetDetails";
import Loading from "../component/Loading";

function Experience() {
  const navigate = useNavigate();
  const { experiences, isPending } = useGetExperiences();

  if (isPending) return <Loading />;
  return (
    <div className="admin-experience">
      <AdminHeading>
        <h1>Experience</h1>
        <p>You have done a lot but it is not enough!!</p>
      </AdminHeading>

      <div className="admin-experience-lists">
        <ul>
          {experiences?.map((experience) => (
            <AdminExperienceCard key={experience.id} experience={experience} />
          ))}
        </ul>
      </div>

      <div className="admin-button-box">
        <h5>Got a new experience?</h5>
        <button onClick={() => navigate("/admin/experience/add")}>
          Add Experience
        </button>
      </div>
    </div>
  );
}

export default Experience;
