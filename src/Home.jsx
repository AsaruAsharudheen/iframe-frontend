import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [iframes, setIframes] = useState([]);

  useEffect(() => {
    axios
      .get('https://iframe-backend.onrender.com/api/iframes')
      .then((res) => setIframes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h1>All 360° Links</h1>

      <div className="add-button-container">
        <Link to="/add">
          <button className="add-button">+ Add New 360° URL</button>
        </Link>
      </div>

      <div className="iframe-list">
        {iframes.map((iframe) => (
          <div key={iframe._id} className="iframe-card">
            <p>
              <strong>Share link:</strong>{' '}
              <a
                href={`https://iframe-frontend.vercel.app/view/${iframe.uniqueId}`}
                target="_blank"
                rel="noreferrer"
              >
                {window.location.origin}/view/{iframe.uniqueId}
              </a>
            </p>
            <p>
              <strong>Place:</strong> {iframe.place || 'N/A'}
            </p>
            <p>
              <strong>Room:</strong> {iframe.room || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
