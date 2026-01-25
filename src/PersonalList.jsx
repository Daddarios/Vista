import { useEffect, useState } from 'react';

function PersonalList() {
  const [personal, setPersonal] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://localhost:44312/api/kunden/personal')
      .then(res => res.json())
      .then(data => {
        console.log("Gelen personel verisi:", data);
        setPersonal(data);
      })
      .catch(err => {
        console.error("Hata:", err);
        setError("Personel verisi alınamadı.");
      });
  }, []);

  return (
    <div>
      <h2>Personel Listesi</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Resim</th>
            <th>Ad Soyad</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Departman</th>
            <th>Berechtigung</th>
          </tr>
        </thead>
        <tbody style={{textAlign:'center'}}>
          {personal.map(p => (
            <tr key={p.personalDatenID}>
              <td>{p.personalDatenID}</td>
              <td>
                <img
                  src={p.bildUrl}
                  alt="Profil"
                  width="50"
                  height="50"
                  style={{ borderRadius: '50%' }}
                />
              </td>
              <td>{p.vorname} {p.nachname}</td>
              <td><a href={`mailto:${p.email}`}>{p.email}</a></td>
              <td>{p.rufNummer}</td>
              <td>{p.abteilung}</td>
              <td style={{ color: 'red' }}>{p.berechtigung}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonalList;
