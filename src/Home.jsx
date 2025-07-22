import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [iframes, setIframes] = useState([]);

  useEffect(() => {
    axios.get('https://iframe-backend.onrender.com/api/iframes')
      .then(res => setIframes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>All 360° Links</h1>
      <Link to="/add">
        <button>Add New 360° URL</button>
      </Link>

      <div style={{ marginTop: '20px' }}>
        {iframes.map(iframe => (
          <div key={iframe._id} style={{ marginBottom: '20px' }}>
            <p>
              Share link:{' '}
              <a
                href={`/view/${iframe.uniqueId}`}
                target="_blank"
                rel="noreferrer"
              >
                {window.location.origin}/view/{iframe.uniqueId}
              </a>
            </p>
            <p style={{ fontSize: '12px' }}>URL: {iframe.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
