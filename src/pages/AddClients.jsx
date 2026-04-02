import { useNavigate } from "react-router-dom";
import { useAddClient } from "../Services/usePostDetails";
import { useForm } from "react-hook-form";

function AddClients() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isCreating, addClients } = useAddClient();

  function onSubmit(data) {
    // console.log(data);
    addClients(data.client, {
      onSuccess: () => {
        reset();
        navigate(-1);
      },
    });
  }
  function onError() {}

  return (
    <div>
      <h1 className="form-heading">Add Client</h1>
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
          {...register("client", {
            required: "This field is required",
          })}
          disabled={isCreating}
        />
        {errors && <small className="error">{errors?.client?.message}</small>}
        <button className="form-btn" disabled={isCreating}>
          {isCreating ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddClients;
