import { useNavigate } from "react-router-dom";
import { useAddExperience } from "../Services/usePostDetails";
import { useForm } from "react-hook-form";

function AddExperience() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { isCreating, addExperience } = useAddExperience();

  function onSubmit(data) {
    addExperience(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }

  function onError() {}

  return (
    <div>
      <h1 className="form-heading">Add Experience</h1>
      <div className="form-back" onClick={() => navigate(-1)}>
        &times;
      </div>

      <form
        className="form-experience"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="Company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name..."
          {...register("company", {
            required: "This field is required",
          })}
        />
        <label htmlFor="Role">Role</label>
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Role..."
          {...register("role", {
            required: "This field is required",
          })}
        />
        <label htmlFor="dateStart">Date Start</label>
        <input
          type="date"
          name="dateStart"
          id="dateStart"
          {...register("dateStart", {
            required: "This field is required",
          })}
        />
        <label htmlFor="dateEnd">Date End</label>
        <input type="date" name="dateEnd" id="" {...register("dateEnd")} />
        <button
          type="submit"
          className="
        form-btn"
          disabled={isCreating}
        >
          {isCreating ? "Submitting.." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddExperience;
