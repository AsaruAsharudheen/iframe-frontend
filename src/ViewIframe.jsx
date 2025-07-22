import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ViewIframe = () => {
  const { id } = useParams();
  const [iframe, setIframe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/iframe/${id}`)
      .then(res => setIframe(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>360° Viewer</h1>
      {iframe ? (
        <div style={{ width: '100%', height: '80vh' }}>
          <iframe
            src={iframe.url}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="360 View"
          ></iframe>
        </div>
      ) : (
        <p>Loading or not found</p>
      )}
    </div>
  );
};

export default ViewIframe;
