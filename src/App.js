import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


let menu = ["My React Project", "Home", "About"];

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled successfully.", "success");
      // setInterval(() => {
      //   document.title = 'Lets start react'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'I am expert in rect'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled successfully.", "success");
    }
  };
  return (
    <>
    <Router> 
      <Navbar
        pageTitle={menu[0]}
        homeText={menu[1]}
        aboutText={menu[2]}
        mode={mode}
        toggleMOde={toggleMode}
      />
      <Alert alert={alert} />
       {/* <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          textHeader="Enter Description"
          mode={mode}
        />
      </div>  */}

      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm
              showAlert={showAlert}
              textHeader="Enter Description"
              mode={mode}
            />}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
      </Router> 
    </>
  );
}

export default App;
