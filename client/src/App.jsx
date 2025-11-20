import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [pong, setPong] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPing = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/ping');
      setPong(response.data.pong);
    } catch (err) {
      setError('Error: ' + err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>MERN Render</h1>
      
      <button onClick={fetchPing} disabled={loading}>
        {loading ? 'Cargando...' : 'Users'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pong && (
        <div>
          <h2 style={{ color: '#C2185B' }}>Respuesta del Servidor:</h2>
          <p style={{ fontSize: '1.2rem', color: '#F48FB1' }}>
            <strong>"pong": "{pong}"</strong>
          </p>
        </div>
      )}
    </div>
  );
}
