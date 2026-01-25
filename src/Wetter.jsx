import { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = () => {
    if (!city) return;

    fetch(`https://localhost:44312/api/kunden/weather/${city}`)
      .then(res => res.json())
      .then(data => {
        try {
          const parsed = JSON.parse(data); // senin API'de JSON string geliyor olabilir
          setWeather(parsed);
          setError(null);
        } catch (e) {
          setError("Veri çözümlenemedi.");
        }
      })
      .catch(err => {
        console.error(err);
        setError("Şehir bulunamadı veya hava durumu alınamadı.");
      });
  };

  return (
    <div>
      <h2>Hava Durumu</h2>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Şehir girin"
      />
      <button onClick={getWeather}>Getir</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather?.main && (
        <div>
          <p><strong>Şehir:</strong> {weather.name}</p>
          <p><strong>Sıcaklık:</strong> {weather.main.temp} °C</p>
          <p><strong>Açıklama:</strong> {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
