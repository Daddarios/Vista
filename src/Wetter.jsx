import { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    fetch(`https://localhost:44312/api/kunden/weather/${city}`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.error("Hava verisi alınamadı", err));
  };

  return (
    <div>
      <h2>Hava Durumu</h2>
      <input
        type="text"
        placeholder="Şehir girin"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Getir</button>

      {weather && (
        <div>
          <p><strong>{weather.name}</strong></p>
          <p>Sıcaklık: {weather.main.temp}°C</p>
          <p>Durum: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
