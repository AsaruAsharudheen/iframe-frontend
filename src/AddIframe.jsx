import { useState } from 'react';
import axios from 'axios';

const AddIframe = () => {
  const [url, setUrl] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!url.trim()) {
      alert('Please enter a URL!');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post('https://iframe-backend.onrender.com/api/iframe', { url });
      setLink(res.data.viewUrl);
      setUrl('');
    } catch (err) {
      console.error(err);
      alert('Error saving URL.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Add 360° Iframe URL</h1>
      <input
        type="url"
        style={{ width: '400px', padding: '8px' }}
        placeholder="https://momento360.com/..."
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSave} disabled={loading}>
        {loading ? 'Saving...' : 'Save URL'}
      </button>

      {link && (
        <p style={{ marginTop: '20px' }}>
          ✅ Share link:{' '}
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </p>
      )}
    </div>
  );
};

export default AddIframe;
