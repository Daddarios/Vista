import KundenList from './KundenList';
import PersonalList from './PersonalList';
import Wetter from './Wetter';

function App() {
  return (
    <div>
      <h1>CRM Uygulaması</h1>
      <KundenList />
      <hr />
      <PersonalList />
      <hr />
      <Wetter />
    </div>
  );
}



export default App;
