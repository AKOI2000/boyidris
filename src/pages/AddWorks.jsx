import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddWorks() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");
    navigate(-1)

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("tags", tags);

      images.forEach((img) => formData.append("images", img));

      const { data } = await axios.post(
        "https://boyidrisbe.onrender.com/work/create",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data.success) {
        setMessage("Post uploaded successfully!");
        // console.log("Saved post:", data.post);
      } else {
        setMessage("Upload failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
     <div className="form-back" onClick={()=> navigate(-1)}>&times;</div>
     <h2 className="form-heading">Create New Post</h2>
      <form onSubmit={handleSubmit} className="form-work">
       
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          className="tags"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="file"
          className="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages([...e.target.files])}
        />

        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Post"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </>
  );
}

export default AddWorks;
