import { useNavigate } from "react-router-dom";
import AdminHeading from "../component/AdminHeading";
import AdminworkCard from "./AdminworkCard";
import { useGetWorks } from "../Services/useWorks";
import Loading from "../component/Loading";

function AdminWorks() {
  const navigate = useNavigate();
  // const [works, setWorks] = useState([""]);

  const { isPending, works } = useGetWorks();

  if (isPending) return <Loading />;

  return (
    <div className="admin-works">
      <AdminHeading>
        <h1>Works</h1>
        <p>You have done a lot but it is not enough!!</p>
      </AdminHeading>

      <div className="admin-work-lists">
        <ul>
          {/* <AdminworkCard />
         <AdminworkCard />
         <AdminworkCard />
         <AdminworkCard />
         <AdminworkCard />
         <AdminworkCard /> */}

          {works.map((work) => (
            <AdminworkCard key={work.id} work={work} />
          ))}
        </ul>
      </div>
      <div className="admin-button-box">
        <h5>Got a new work?</h5>
        <button
          onClick={() => {
            navigate("/admin/work/add");
          }}
        >
          Add Work
        </button>
      </div>
    </div>
  );
}

export default AdminWorks;
