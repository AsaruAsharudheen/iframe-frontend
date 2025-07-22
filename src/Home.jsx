import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // ✅ Make sure to import your CSS

const Home = () => {
  const [iframes, setIframes] = useState([]);

  useEffect(() => {
    axios.get('https://iframe-backend.onrender.com/api/iframes')
      .then(res => setIframes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h1>🌐 All 360° View Links</h1>
      <Link to="/add" className="add-button">
        Add New 360° URL
      </Link>

      <div className="iframe-list">
        {iframes.map(iframe => (
          <div key={iframe._id} className="iframe-item">
            <p className="iframe-link">
              <strong>Share link:</strong>{' '}
              <a href={`/view/${iframe.uniqueId}`} target="_blank" rel="noreferrer">
                {window.location.origin}/view/{iframe.uniqueId}
              </a>
            </p>
            <p className="iframe-url">{iframe.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
