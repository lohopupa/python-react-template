import React, { useEffect, useState } from 'react';
import './App.css';

type Result = {
  result: string
}

function App() {

  const [resp, setResp] = useState("")

  const getResp = () => {
    fetch("http://localhost:8080/api/hello-world").then((r) => {
      r.json().then((res: Result) => setResp(res.result))
    }).catch((err) => console.error("Something went wrong", err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="App-button"
          onClick={getResp}>
          Hello Back
        </button>
        <p>
          Back says: {resp}
        </p>
      </header>
    </div>
  );
}

export default App;
