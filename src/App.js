import React, { useState } from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import Alert from "./components/Alert"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light") //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0a3b63"
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
