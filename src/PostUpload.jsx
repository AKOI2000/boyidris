import { useState } from 'react';
import axios from 'axios';

function PostUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('tags', tags);

      images.forEach((img) => formData.append('images', img));

      const { data } = await axios.post(
        'https://boyidrisbe.onrender.com/boy-admin/create',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (data.success) {
        setMessage('Post uploaded successfully!');
        console.log('Saved post:', data.post);
      } else {
        setMessage('Upload failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setImages([...e.target.files])}
      />

      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Post'}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default PostUpload;
