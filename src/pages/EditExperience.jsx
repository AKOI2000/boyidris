import { useNavigate, useParams } from "react-router-dom";
import { useGetExperience } from "../Services/useGetDetails";
import Loading from "../component/Loading";
import { useForm } from "react-hook-form";
import { useEditExperience } from "../Services/useEditDetails";
import { format } from "date-fns";

function EditExperience() {
  const navigate = useNavigate();

  const { experience, isPending } = useGetExperience();
  console.log(experience);
  const { register, handleSubmit } = useForm();

  const { editExperience, isEditing } = useEditExperience();

  function onSubmit(data) {
    editExperience(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }
  function onError() {}

  if (isPending) return <Loading />;
  return (
    <div>
      <h1 className="form-heading">Edit Experience</h1>
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
          defaultValue={experience.companyname}
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
          defaultValue={experience.role}
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
          defaultValue={format(new Date(experience.datestart), "yyyy-MM-dd")}
          {...register("dateStart", {
            required: "This field is required",
          })}
        />
        <label htmlFor="dateEnd">Date End</label>
        <input
          type="date"
          name="dateEnd"
          id=""
          defaultValue={
            experience.dateend
              ? format(new Date(experience.dateend), "yyyy-MM-dd")
              : ""
          }
          {...register("dateEnd")}
        />
        <button
          type="submit"
          className="
        form-btn"
          disabled={isEditing}
        >
          {isEditing ? "Submitting" : " Submit"}
        </button>
      </form>
    </div>
  );
}

export default EditExperience;
