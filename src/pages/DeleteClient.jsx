import { useNavigate, useParams } from "react-router-dom";

function DeleteClient() {
    const navigate = useNavigate();
    const {id} = useParams();

    function back (e) {
        e.preventDefault();
        navigate(-1);
    }

    async function confirm(e) {
        e.preventDefault();
        navigate(-1)
        try {
            const res = await fetch(`https://boyidrisbe.onrender.com/client/delete/${id}`, {
               method: "DELETE",
               headers:  {"Content-Type": "application/json"}
            })

            if(!res.ok) throw new Error ("Unable to delete")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="delete-section">
           <h1 className="form-heading">Are you sure you want to delete this client?</h1>
           <div className="delete-section_buttons">
                <button className="cancel" onClick={back}>Cancel</button>
                <button className="confirm" onClick={confirm}>Confirm</button>
           </div>
        </div>
    )
}

export default DeleteClient
