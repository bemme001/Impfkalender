import './App.css';
import AddImmunization from "./components/addImmunization/AddImmunization";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddImmunization uuid='urn:uuid:4e63dc49485e4924a5cbe6d9932086ec' pid='2692361' perf='Practitioner/2691497'/>
      </header>
    </div>
  );
}

export default App;