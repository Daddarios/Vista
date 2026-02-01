import { useEffect, useState } from "react";

function Kanban() {
  const [spalten, setSpalten] = useState([]);
  const [fehler, setFehler] = useState(null);

  useEffect(() => {
    try {
      setSpalten([
        { titel: "To-Do-Liste", karten: ["Aufgabe 1", "Aufgabe 2"] },
        { titel: "In Bearbeitung", karten: ["Aufgabe 3"] },
        { titel: "Erledigt", karten: ["Aufgabe 4", "Aufgabe 5"] },
      ]);
    } catch {
      setFehler("Kanban-Daten konnten nicht geladen werden.");
    }
  }, []);

  const karteHinzufuegen = (index) => {
    const neu = [...spalten];
    neu[index].karten.push("Neue Aufgabe");
    setSpalten(neu);
  };

  // ✅ YENİ: Karte löschen
  const karteLoeschen = (spaltenIndex, kartenIndex) => {
    const neu = [...spalten];
    neu[spaltenIndex].karten.splice(kartenIndex, 1);
    setSpalten(neu);
  };

  return (
    <div className="kanban-container">
      {fehler && <p className="error-message">{fehler}</p>}

      {spalten.map((spalte, spaltenIndex) => (
        <div className="kanban-column" key={spaltenIndex}>
          <div className="kanban-header">
            <h3>{spalte.titel}</h3>
            <span className="kanban-count">{spalte.karten.length}</span>
          </div>

          {spalte.karten.map((karte, kartenIndex) => (
            <div className="kanban-card" key={kartenIndex}>
              <span>{karte}</span>

              {/* ✅ Silme butonu */}
              <button
                className="kanban-delete-btn"
                onClick={() =>
                  karteLoeschen(spaltenIndex, kartenIndex)
                }
              >
                ✕
              </button>
            </div>
          ))}

          <button
            className="kanban-add-btn"
            onClick={() => karteHinzufuegen(spaltenIndex)}
          >
            + Karte hinzufügen
          </button>
        </div>
      ))}
    </div>
  );
}

export default Kanban;
