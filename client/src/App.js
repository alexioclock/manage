import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);


  return (
    <div className="App">
      <div className="divInput">
        <label>Nom</label>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="divInput">
        <label>Âge:</label>
        <input type="number" onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div className="divInput">
        <label>Pays:</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)}/>
      </div>
      <div className="divInput">
        <label>Position:</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)}/>
      </div>
      <div>
        <label>Salaire:</label>
        <input type="number" onChange={(e) => setWage(e.target.value)}/>
      </div>
      <div>
        <button>Ajoutez un employé</button>
      </div>
    </div>
  );
}

export default App;
