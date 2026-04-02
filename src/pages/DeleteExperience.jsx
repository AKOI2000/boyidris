import { useNavigate, useParams } from "react-router-dom";
import { useDeleteExperience } from "../Services/useDeleteDetails";

function DeleteExperience() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isDeleting, deleteExperience } = useDeleteExperience();

  function back(e) {
    e.preventDefault();
    navigate(-1);
  }

  async function confirm(e) {
    e.preventDefault();
    deleteExperience(id, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }

  return (
    <div className="delete-section">
      <h1 className="form-heading">
        Are you sure you want to delete this work from your portfolio?
      </h1>
      <div className="delete-section_buttons">
        <button className="cancel" onClick={back} disabled={isDeleting}>
          Cancel
        </button>
        <button className="confirm" onClick={confirm} disabled={isDeleting}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteExperience;
