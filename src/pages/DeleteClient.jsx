import { useNavigate, useParams } from "react-router-dom";
import { backend_url } from "../helpers/constants";
import { useDeleteClient } from "../Services/useDeleteDetails";

function DeleteClient() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isDeleting, deleteClient } = useDeleteClient();

  function confirm() {
    deleteClient(id, {
      onSuccess: () => {
        navigate("/dashboard/clients");
      },
    });
  }

  return (
    <div className="delete-section">
      <h1 className="form-heading">
        Are you sure you want to delete this client?
      </h1>
      <div className="delete-section_buttons">
        <button
          className="cancel"
          onClick={() => navigate(-1)}
          disabled={isDeleting}
        >
          Cancel
        </button>
        <button className="confirm" onClick={confirm} disabled={isDeleting}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default DeleteClient;
