import { Navigate, useNavigate } from "react-router-dom";
import AdminHeading from "../component/AdminHeading";
import AdminworkCard from "./AdminworkCard";
import { useEffect, useState } from "react";

function AdminWorks() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [works, setWorks] = useState([""]);
 
  useEffect (() => {
    async function getWorks () {
     try {
      setLoading(true) 
      setError("")
      const res = await fetch(`https://boyidrisbe.onrender.com/allworks`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
      });
      if (!res.ok) throw new Error ("Unable to fetch");
      const data = await res.json();
      setWorks(data);
     } catch (error) {
      setError(error.message)
     } finally {
      setLoading(false)
     }
    }

    getWorks();
  }, [])

   if (loading) return <p>Loading...</p>

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
         
          {works.map(work => (
          <AdminworkCard key={work.id} work={work}/>
         ))}
        </ul>
      </div>
      <div className="admin-button-box">
        <h5>Got a new work?</h5>
        <button onClick={ () => {
          navigate('/admin/work/add')
        }}>Add Work</button>
      </div>
     
    </div>
  );
}

export default AdminWorks;
