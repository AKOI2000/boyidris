import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditWorks() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const {slug} = useParams();


    useEffect(() => {
      async function getWork() {
       try {
        setUploading(true);
        setMessage("");
        const res = await fetch(`https://boyidrisbe.onrender.com/work/${slug}`, {
          method: "GET",
          headers: {"Content-Type": "application/json"}
        });
        if (!res.ok) throw new Error ("Error Fetching, try again")
        const data = await res.json();
        setTitle(data[0].title);
        setDescription(data[0].description);
        setTags(data[0].tags);
       } catch (error) {
        setMessage(error.message)
       } finally {
        setUploading(false)
       }

      }

      getWork();
    }, [slug])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setUploading(true);
      setMessage("");
      navigate(-1)
  
      try {
        const res = await fetch(
          `https://boyidrisbe.onrender.com/work/edit/${slug}`,
           {
            method: "PATCH",
             headers: { "Content-Type": "application/json" },
             body : JSON.stringify({title, description, tags}) 
           }
        );
        if (!res.ok) throw new Error ("error editing the work");
        const data = await res.json();
        setMessage(data)
      } catch (err) {
        console.error(err);
        setMessage(err.message);
      } finally {
        setUploading(false);
      }
    };
  
    return (
      <>
       <div className="form-back" onClick={()=> navigate(-1)}>&times;</div>
       <h2 className="form-heading">Edit Post</h2>
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
          {message && <small>{message}</small>}
  
          <button type="submit" disabled={uploading} className="form-btn">
            {uploading ? "Editing..." : "Edit Post"}
          </button>
        </form>
      </>
    );
}

export default EditWorks
