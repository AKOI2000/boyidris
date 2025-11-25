import { useNavigate } from "react-router-dom";
import AdminHeading from "../component/AdminHeading";
import AdminClientCard from "./AdminClientCard";
import { useEffect, useState } from "react";

function Clients() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    async function getClients () {
      	try {
          setLoading(true);
          setError("")
          const result = await fetch("https://boyidrisbe.onrender.com/clients", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
          if (!result.ok) throw new Error("Can't fetch clients")
          const data = await result.json();
          
          setClients(data);
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
    }
    getClients();
  }, [])


  return (
    <div className="admin-clients">
      <AdminHeading>
        <h1>Clients</h1>
        <p>You have done a lot but it is not enough!!</p>
      </AdminHeading>

      <div className="admin-client-lists">
        <ul>
          {clients.map (client => (
            <AdminClientCard key={client.id} client={client}/>
          ))}
        </ul>
      </div>

      <div className="admin-button-box">
        <h5>Got a new client?</h5>
        <button onClick={()=> navigate("/admin/client/add")}>Add Client</button>
      </div>
    </div>
  );
}

export default Clients;
