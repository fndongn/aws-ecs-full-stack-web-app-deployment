import React, { useEffect, useState } from 'react'
import './App.css';
import config from './config'

function App() {
  const [successMessage, setSuccessMessage] = useState(null) 
  const [failureMessage, setFailureMessage] = useState(null) 

  useEffect(() => {
    const getId = async () => {
      try {
        const resp = await fetch(config.backendUrl)
        const data = await resp.json()
        // Concatenate "SUCCESS " with the backend id
        setSuccessMessage("SUCCESS " + data.id)
      }
      catch(e) {
        setFailureMessage(e.message)
      }
    }
    getId()
  }, []) // run once

  return (
    <div className="App">
      {!failureMessage && !successMessage ? 'Fetching...' : null}
      {failureMessage ? failureMessage : null}
      {successMessage ? successMessage : null}
    </div>
  );
}

export default App;
