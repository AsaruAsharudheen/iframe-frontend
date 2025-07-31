import { useState } from 'react';
import axios from 'axios';

const AddIframe = () => {
  const [url, setUrl] = useState('');
  const [place, setPlace] = useState('');
  const [room, setRoom] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!url.trim()) {
      alert('Please enter a URL!');
      return;
    }
    if (!place.trim()) {
      alert('Please enter a Place!');
      return;
    }
    if (!room.trim()) {
      alert('Please enter a Room!');
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        'https://iframe-backend.onrender.com/api/iframe',
        { url, place, room }
      );
      setLink(res.data.viewUrl);
      setUrl('');
      setPlace('');
      setRoom('');
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
        onChange={(e) => setUrl(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        style={{ width: '400px', padding: '8px' }}
        placeholder="Enter Place Name"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        style={{ width: '400px', padding: '8px' }}
        placeholder="Enter Room Name"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
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
