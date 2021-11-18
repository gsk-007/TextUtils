import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0a3b63'
      showAlert('Dark Mode has been enabled', 'success')
    } else {
       setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
    }
  }

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert }/>
     <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode ={mode} />
       
     </div>
    </div>
  );
}

export default App;
