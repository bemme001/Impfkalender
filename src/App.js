import './App.css';
import AddImmunization from "./components/addImmunization/AddImmunization";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddImmunization uuid='urn:uuid:fda0cd02fecb4b858762fe782d1ec79e' pid='2690808' perf='Practitioner/2691497'/>
      </header>
    </div>
  );
}

export default App;