import { useState } from 'react';

function Wetter() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = () => {
    if (!city.trim()) {
      setError("Bitte geben Sie eine Stadt ein.");
      return;
    }

    fetch(`https://localhost:44312/api/kunden/weather/${city}`)
      .then(res => res.json())
      .then(data => {
        try {
          const parsed = typeof data === 'string' ? JSON.parse(data) : data;
          setWeather(parsed);
          setError(null);
        } catch (e) {
          setError("Die Daten konnten nicht verarbeitet werden.");
          setWeather(null);
        }
      })
      .catch(err => {
        console.error(err);
        setError("Stadt nicht gefunden oder Wetterdaten konnten nicht geladen werden.");
        setWeather(null);
      });
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Stadt eingeben"
        />
        <button onClick={getWeather}>Abrufen</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weather?.main && (
        <div
          style={{
            background: '#ecf0f1',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            maxWidth: '400px'
          }}
        >
          <p><strong>📍 Stadt:</strong> {weather.name}</p>
          <p><strong>🌡 Temperatur:</strong> {weather.main.temp} °C</p>
          <p><strong>☁️ Beschreibung:</strong> {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Wetter;
