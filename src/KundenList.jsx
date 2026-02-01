import { useEffect, useState } from 'react';

function KundenList() {
  const [kunden, setKunden] = useState([]);
  const [fehler, setFehler] = useState(null);

  useEffect(() => {
    fetch('https://localhost:44312/api/kunden')
      .then(res => res.json())
      .then(data => setKunden(data))
      .catch(err => {
        console.error("Fehler:", err);
        setFehler("Kundendaten konnten nicht geladen werden.");
      });
  }, []);

  return (
    <div>
      {fehler && <p className="error-message">{fehler}</p>}

      {kunden.length === 0 ? (
        <p>Keine Kunden zum Anzeigen gefunden.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Vollständiger Name</th>
              <th>E-Mail</th>
              <th>Unternehmen</th>
            </tr>
          </thead>
          <tbody>
            {kunden.map(k => (
              <tr key={k.KundenDatenID}>
                <td>{k.KundenDatenID}</td>
                <td>{k.Vorname} {k.Nachname}</td>
                <td>
                  <a href={`mailto:${k.Email}`}>{k.Email || '-'}</a>
                </td>
                <td>{k.Unternehmen || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default KundenList;
