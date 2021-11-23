import './App.css';
import AddImmunization from "./components/addImmunization/AddImmunization";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddImmunization uuid='123456789' pid='12345'/>
      </header>
    </div>
  );
}

export default App;