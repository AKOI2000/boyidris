import { useNavigate, useParams } from "react-router-dom";
import { backend_url } from "../helpers/constants";
import { useDeleteWork } from "../Services/useWorks";

function DeleteWorks() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { isDeleting, deleteWork } = useDeleteWork();

  function back(e) {
    e.preventDefault();
    navigate(-1);
  }

  function confirm(e) {
    e.preventDefault();
    deleteWork(slug, {
      onSuccess: () => {
        navigate(-1);
      },
    });
    navigate(-1);
  }

  return (
    <div className="delete-section">
      <h1 className="form-heading">
        Are you sure you want to delete this work from your portfolio?
      </h1>
      <div className="delete-section_buttons">
        <button className="cancel" onClick={back}>
          Cancel
        </button>
        <button className="confirm" onClick={confirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteWorks;
