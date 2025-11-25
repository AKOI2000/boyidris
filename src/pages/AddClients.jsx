import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddClients() {
    const navigate = useNavigate();
    const [client, setClient] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    async function postClient(e) {
      e.preventDefault();
        try {
          setLoading(true)
          const res =  await fetch("https://boyidrisbe.onrender.com/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({client: client}),
          });
          if (!res.ok) throw new Error("Couldn't added new client, try again")
          const data = await res.json();
          setMessage(data.message)
        } catch (err) {
          setError(err.message)
          console.log(err);
        } finally {
          setLoading(false)
          navigate(-1)
        }
    }

  return (
    <div>
      <h1 className="form-heading">Add Client</h1>
      <div className="form-back" onClick={()=> navigate(-1)}>&times;</div>

      <form className="form-client" onSubmit={postClient}>
        <label htmlFor="client">Client</label>
        <input type="text" name="client" id="" placeholder="Client Name.." onChange={(e)=> setClient(e.target.value)}/>
        {error  && <small className="error">{error}</small>}
        {!error && message  && <small className="success">{message}</small>}
        <button className="form-btn" disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
      </form>
    </div>
  );
}

export default AddClients;
