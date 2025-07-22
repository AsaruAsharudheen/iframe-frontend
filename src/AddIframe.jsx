import { useState } from 'react';
import axios from 'axios';

const AddIframe = () => {
  const [url, setUrl] = useState('');
  const [link, setLink] = useState('');

  const handleSave = async () => {
    if (!url) return alert('Enter a URL!');
    const res = await axios.post('http://localhost:5000/api/iframe', { url });
    setLink(res.data.viewUrl);
    setUrl('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Add 360° Iframe URL</h1>
      <input
        style={{ width: '400px', padding: '8px' }}
        placeholder="https://momento360.com/..."
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSave}>Save URL</button>

      {link && (
        <p>
          Share link: <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </p>
      )}
    </div>
  );
};

export default AddIframe;
