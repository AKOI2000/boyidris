import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useEditWork, useGetWork } from "../Services/useWorks";
import Loading from "../component/Loading";

function EditWorks() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { work, isPending } = useGetWork();
  const { isEditing, editWork } = useEditWork();

  function onSubmit(data) {
    editWork(data, {
      onSuccess: () => {
        reset, navigate(-1);
      },
    });
  }
  function onError() {}

  if (isPending) return <Loading />;

  return (
    <>
      <div className="form-back" onClick={() => navigate(-1)}>
        &times;
      </div>
      <h2 className="form-heading">Edit Post</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="form-work">
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={work.title}
          {...register("title", {
            required: "This field is required",
          })}
        />

        <textarea
          className="description"
          placeholder="Description"
          name="description"
          defaultValue={work.description}
          {...register("description", {
            required: "This field is required",
          })}
        />

        <input
          type="text"
          className="tags"
          defaultValue={work.tags}
          name="tags"
          placeholder="Tags (comma separated)"
          {...register("tags", {
            required: "This field is required",
          })}
        />
        {/* {message && <small>{message}</small>} */}

        <button type="submit" disabled={isEditing} className="form-btn">
          {isEditing ? "Editing..." : "Edit Post"}
        </button>
      </form>
    </>
  );
}

export default EditWorks;
