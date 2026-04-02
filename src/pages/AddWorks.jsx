import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateWork } from "../Services/useWorks";

function AddWorks() {
  const { isPending, createWork } = useCreateWork();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    createWork(data, {
      onSettled: () => {
        reset;
        navigate(-1);
      },
    });
  }
  function onError() {}

  return (
    <>
      <div className="form-back" onClick={() => navigate(-1)}>
        &times;
      </div>
      <h2 className="form-heading">Create New Post</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="form-work">
        <input
          className="title"
          type="text"
          name="title"
          placeholder="Title"
          {...register("title", {
            required: "This field is required",
          })}
          required
        />

        <textarea
          className="description"
          placeholder="Description"
          name="description"
          {...register("description", {
            required: "This field is required",
          })}
        />

        <input
          type="text"
          className="tags"
          placeholder="Tags (comma separated)"
          name="tags"
          {...register("tags", {
            required: "This field is required",
          })}
        />
        <input
          type="file"
          className="file"
          name="images"
          multiple
          accept="image/*"
          {...register("images", {
            required: "This field is required",
          })}
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Uploading..." : "Upload Post"}
        </button>
      </form>
    </>
  );
}

export default AddWorks;
