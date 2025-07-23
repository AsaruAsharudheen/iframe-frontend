import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
const ViewIframe = () => {
  const { id } = useParams();
  const [iframe, setIframe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://iframe-backend.onrender.com/api/iframe/${id}`)
      .then(res => setIframe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="full-screen-iframe">
      {iframe ? (
        <iframe
          src={iframe.url}
          frameBorder="0"
          allowFullScreen
          title="360° Viewer"
        ></iframe>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Loading or not found
        </p>
      )}
    </div>
  );
};

export default ViewIframe;
