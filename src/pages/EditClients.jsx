import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditClients() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [loading, setLoading] = useState(false);
    const [error, setErrror] = useState("");
    const [client, setClient] = useState("")

    useEffect (()=> {
      async function getClient () {
        try {
          setLoading(true)
          const res =  await fetch(`https://boyidrisbe.onrender.com/client/edit/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
          if (!res.ok) throw new Error ("Unable to fetch");
  
          const data = await res.json();
          setClient(data.client);
  
        } catch (error) {
          console.log(error.message);
        } finally {
          setLoading(false)
        }
      }

      getClient()
    }, [id]);

    async function editClient(e) {
      e.preventDefault();
      try {
        setLoading(true)
        const res = await fetch (`https://boyidrisbe.onrender.com/client/edit/${id}`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({client: client})
        });
        if(!res.ok) throw new Error ("Unable to edit the client, try again")
      } catch (error) {
        console.log(error.message);
        setErrror(error.message)
      } finally {
        setLoading(false)
        navigate(-1)
      }
    }

  return (
    <div>
      <h1 className="form-heading">Edit Client</h1>
      <div className="form-back" onClick={()=> navigate(-1)}>&times;</div>

      <form className="form-client" onSubmit={editClient}>
        <label htmlFor="client">Client</label>
        <input type="text" name="client" id="" value={client} placeholder="Client Name.." onChange={(e) => setClient(e.target.value)}/>
        {error && <small>{error}</small> }
        <button className="form-btn" disabled={loading}>Submit</button>
      </form>
    </div>
  );
}

export default EditClients;
