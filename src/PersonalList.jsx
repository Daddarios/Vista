import { useEffect, useState } from 'react';

function PersonalList() {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44312//api/kunden/personal')
      .then(res => res.json())
      .then(data => setPersonal(data))
      .catch(err => console.error("Hata:", err));
  }, []);

  return (
    <div>
      <h2>Personel Listesi</h2>
      <ul>
        {personal.map(p => (
          <li key={p.PersonalDatenID}>
            {p.Vorname} {p.Nachname} - {p.Email} - {p.Abteilung}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonalList;
