import { useEffect, useState } from 'react';

function KundenList() {
  const [kunden, setKunden] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44312//api/kunden')  // API adresini güncelle
      .then(res => res.json())
      .then(data => setKunden(data))
      .catch(err => console.error("Hata:", err));
  }, []);

  return (
    <div>
      <h2>Kunden Listesi</h2>
      <ul>
        {kunden.map(k => (
          <li key={k.KundenDatenID}>
            {k.Vorname} - {k.Email} - {k.Unternehmen}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KundenList;
