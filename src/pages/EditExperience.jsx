import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditExperience() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setdateEnd] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function formatDate(dateString) {
    const dateObject = new Date(dateString);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0"); // getMonth() is 0-indexed
    const day = dateObject.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate; // Output: 2024 11 09
  }

  async function editExistingExperience(e) {
    e.preventDefault();

    try {
        setLoading(true);
        const res = await fetch (`https://boyidrisbe.onrender.com/experience/edit/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({company, role, dateStart, dateEnd})
        })
        if (!res.ok) throw new Error ("Having trouble editing");
        const data = await res.json();
        console.log(data);
    } catch (error) {
        setError(error.message)
    } finally {
        setLoading(false)
        navigate(-1)
    }
  }

  useEffect(() => {
    async function getExistingExperience() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://boyidrisbe.onrender.com/experience/${id}`, {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        });
        if (!res.ok) throw new Error("Error fetching the data");
        const data = await res.json();

        setCompany(data.companyname);
        setRole(data.role);
        setDateStart(formatDate(data.datestart));
        if (data.dateend === null) return;
        setdateEnd(formatDate(data.dateend));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getExistingExperience();
  }, [id]);

  return (
    <div>
      <h1 className="form-heading">Edit Experience</h1>
      <div className="form-back" onClick={() => navigate(-1)}>
        &times;
      </div>
      <form className="form-experience" onSubmit={editExistingExperience}>
        <label htmlFor="Company">Company</label>
        <input
          type="text"
          name="Company"
          id=""
          placeholder="Company Name..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <label htmlFor="Role">Role</label>
        <input
          type="text"
          name="Role"
          id=""
          placeholder="Role..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <label htmlFor="date-start">Date Start</label>
        <input
          type="date"
          name="date-start"
          id=""
          value={dateStart}
          onChange={(e) => setDateStart(e.target.value)}
          required
        />
        <label htmlFor="date-end">Date End</label>
        <input
          type="date"
          name="date-end"
          id=""
          value={dateEnd}
          onChange={(e) => setdateEnd(e.target.value)}
          required
        />
        <button
          type="submit"
          className="
        form-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditExperience;
