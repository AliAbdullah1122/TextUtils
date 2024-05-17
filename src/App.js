import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TxetForm from "./components/TxetForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title ='TextUtils - Dark Mode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title ='TextUtils - Light Mode'
    }
  };
 
  return (
    <>
    {/* <Router>
      <Navbar
        title="TextUtils"
        abouttitle="About"
        mode={mode}
        toggleMode={toggleMode}
        toggleModeReddish={toggleModeReddish}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TxetForm
          showAlert={showAlert}
          label="Enter Text in this Area"
          mode={mode}
        />
          </Route>
        </Switch>
      </div>
      </Router> */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          abouttitle="About Us"
          mode={mode}
          toggleMode={toggleMode}
          
        />

        <Alert alert={alert}/>
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TxetForm
                  showAlert={showAlert}
                  label="Try TextUtils - Word Counter | Character Counter, Remove extra spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
