import { useEffect, useState } from 'react';

function PersonalList() {
  const [personal, setPersonal] = useState([]);
  const [fehler, setFehler] = useState(null);

  useEffect(() => {
    fetch('https://localhost:44312/api/kunden/personal')
      .then(res => res.json())
      .then(data => setPersonal(data))
      .catch(err => {
        console.error("Fehler:", err);
        setFehler("Personaldaten konnten nicht geladen werden.");
      });
  }, []);

  return (
    <div>
      {fehler && <p className="error-message">{fehler}</p>}

      {personal.length === 0 ? (
        <p>Keine Personaldaten vorhanden.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bild</th>
              <th>Vollständiger Name</th>
              <th>E-Mail</th>
              <th>Telefon</th>
              <th>Abteilung</th>
              <th>Berechtigung</th>
            </tr>
          </thead>
          <tbody>
            {personal.map(p => (
              <tr key={p.personalDatenID}>
                <td>{p.personalDatenID}</td>
                <td>
                  <img
                    src={p.bildUrl}
                    alt="Profil"
                    width="40"
                    height="40"
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                </td>
                <td>{p.vorname} {p.nachname}</td>
                <td>
                  <a href={`mailto:${p.email}`}>{p.email}</a>
                </td>
                <td>{p.rufNummer || '-'}</td>
                <td>{p.abteilung || '-'}</td>
                <td style={{ color: '#e74c3c', fontWeight: 'bold' }}>{p.berechtigung}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PersonalList;
