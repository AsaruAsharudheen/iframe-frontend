import { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');

  const handleUpload = async () => {
    if (!file) return alert('Please select an image file!');
    const formData = new FormData();
    formData.append('image', file);

    const res = await axios.post('https://iframe-backend.onrender.com/api/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    setLink(res.data.viewUrl);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Admin Upload Page</h1>
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={handleUpload}>Upload Image</button>
      {link && (
        <p>
          Share link: <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </p>
      )}
    </div>
  );
};

export default Upload;
