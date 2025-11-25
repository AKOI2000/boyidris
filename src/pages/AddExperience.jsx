import { useState } from "react";
import { useNavigate } from "react-router-dom"

function AddExperience() {
        const navigate = useNavigate();
        const [company, setCompany] = useState("");
        const [role, setRole] = useState("");
        const [dateStart, setDateStart] = useState("");
        const [dateEnd, setdateEnd] = useState();
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("")

        async function AddNewExperience(e) {
            e.preventDefault();
            try {
                setLoading(true);
                setError("");
                const res = await fetch("https://boyidrisbe.onrender.com/experience/create", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({company, role, dateStart, dateEnd})
                })
                if(!res.ok) throw new Error("Unable to add the new experience, start the process all over");

                const data = await res.json();
                console.log(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
                navigate(-1)
            }
        }

        return (
            <div>
               <h1 className="form-heading">Add Experience</h1>
               <div className="form-back" onClick={()=> navigate(-1)}>&times;</div>

               <form className="form-experience" onSubmit={AddNewExperience}>
                <label htmlFor="company">c</label>
                <input type="text" name="company" id="" placeholder="Company Name..." onChange={(e)=> setCompany(e.target.value)} required/>
                <label htmlFor="role">Role</label>
                <input type="text" name="role" id="" placeholder="Role..." onChange={(e) => setRole(e.target.value)} required/>
                <label htmlFor="dateStart">Date Start</label>
                <input type="date" name="dateStart" id="" onChange={(e)=> setDateStart(e.target.value)} required/>
                <label htmlFor="dateEnd">Date End</label>
                <input type="date" name="dateEnd" id="" onChange={(e)=> setdateEnd(e.target.value)}/>
                <button type="submit" className="form-btn">Submit</button>
               </form>
            </div>
        )
}

export default AddExperience
