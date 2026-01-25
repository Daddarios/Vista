# Vistora

**Vistora** ist eine moderne, komponentenbasierte **Single Page Application (SPA)**,  
die auf **React.js** basiert und eng mit dem bestehenden Projekt **[CrmAPP](https://github.com/Daddarios/CrmAPP)** verbunden ist.  
Sie kommuniziert direkt mit einem **ASP.NET Web API**-Backend und stellt Geschäftsdaten über REST-Endpunkte visuell dar.

Ziel ist es, eine wiederverwendbare, skalierbare und moderne Oberfläche für CRM-Daten zu schaffen,  
die sowohl im professionellen als auch im schulischen Umfeld eingesetzt werden kann (z. B. IHK-Projekte, Kundenpräsentationen).

---

## 🚀 Verwendete Technologien
- React.js (Create React App)
- ASP.NET Web API (REST-Schnittstellen)
- Entity Framework (Datenzugriffsschicht)
- MSSQL (Datenbank)
- TailwindCSS oder Bootstrap (Responsives UI)

---

## 🔗 Verknüpftes Projekt
- [CrmAPP (Backend)](https://github.com/Daddarios/CrmAPP) – Die API, mit der Vistora verbunden ist

---

## 📌 Projektstruktur
- **Frontend**: React SPA (`Vistora`)
- **Backend**: ASP.NET Web API (`CrmAPP`)
- Daten werden über REST geladen und dynamisch dargestellt

---

## 🎯 Zielsetzung
Ziel des Projekts ist die Entwicklung einer modularen und wartbaren Benutzeroberfläche  
für Unternehmensdaten, mit Fokus auf API-Integration, responsives Design und moderne Entwicklungspraxis.

---

## 🌐 Beispiel-API-Endpunkte
- `GET /api/kunden` → Kundenliste
- `GET /api/kunden/personal` → Personalinformationen
- `GET /api/projekte` → Projektübersicht
- `GET /api/kunden/weather/{city}` → Wetterdaten (über OpenWeatherMap API)

---

## ⚙️ Lokale Installation

```bash
npm install
npm start
