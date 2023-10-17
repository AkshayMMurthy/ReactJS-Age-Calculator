import React, { useState } from 'react';
import './App.css';

function App() {
  const [bd, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const t1 = new Date();
    const bd1 = new Date(bd);
    const diff = t1 - bd1;
    const a1 = new Date(diff);
    const age = Math.abs(a1.getUTCFullYear() - 1970);
    setAge(age);
  };

  return (
    <div className="abc">
      <header className="abc-xyz">
        <h1>Age Calculator</h1>
        <h5>Enter your date of birth</h5>
        <input type="date" value={bd} onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge} className="calculate-button">
          Calculate Age
        </button>
        {age !== null && <h3>You are {age} years old</h3>}
      </header>
    </div>
  );
}

export default App;
