import React, { useEffect, useState } from 'react';
import './style.css';
import { queryApi } from '../../helpers/api';

type Result = {
  result: string
}

function Root() {

  const [resp, setResp] = useState("")

  const getResp = () => {
    queryApi("GET", "hello-world").then((res: Result) => setResp(res.result))
    .catch((err) => console.error("Something went wrong", err))
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

export default Root;
