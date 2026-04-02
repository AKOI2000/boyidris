import { useNavigate } from "react-router-dom";
import { useGetClient } from "../Services/useGetDetails";
import Loading from "../component/Loading";
import { useEditClient } from "../Services/useEditDetails";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditClients() {
  const navigate = useNavigate();
  const { client, isPending } = useGetClient();
  const { editClient, isPending: isEditing } = useEditClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  // console.log(client);

  if (isPending) return <Loading />;

  function onSubmit(data) {
    // console.log(data.client);
    editClient(data.client, {
      onSuccess: () => {
        reset();
        navigate(-1);
      },
    });
  }
  function onError() {

  }

  return (
    <div>
      <h1 className="form-heading">Edit Client</h1>
      <div className="form-back" onClick={() => navigate(-1)}>
        &times;
      </div>

      <form className="form-client" onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="client">Client</label>
        <input
          type="text"
          name="client"
          id="client"
          placeholder="Client Name.."
          defaultValue={client.client}
          {...register("client", {
            required: "This field is required",
          })}
          disabled={isEditing}
        />

        {errors && <small className="error">{errors?.client?.message}</small>}
        <button className="form-btn" disabled={isPending || isEditing}>
          {isEditing ? "Editing..." : "Edit"}
        </button>
      </form>
    </div>
  );
}

export default EditClients;
