import { useNavigate } from "react-router-dom";

function AdminClientCard({ client }) {
  const navigate = useNavigate();

  return (
    <li>
      <div className="text-box">
        <p>{client.client}</p>
      </div>
      <div className="button-box">
        <button
          className="edit"
          onClick={() => navigate(`/admin/client/edit/${client.id}`)}
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() => navigate(`/admin/client/delete/${client.id}`)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default AdminClientCard;
