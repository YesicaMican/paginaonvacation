import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navegador from "./Navegador.js";
import Footer from "./Footer";
import Bluereef from "./hoteles/Bluereef";
import Home from "./Home";
import Bluecove from "./hoteles/Bluecove";
import Tower from "./hoteles/Tower";
import Tone from "./hoteles/Tone";
import Coral from "./hoteles/Coral";
import Hill from "./hoteles/Hill";
import Acantilado from "./hoteles/Acantilado";
import Wayira from "./hoteles/Wayira";
import Caribe from "./hoteles/Caribe";
import Factoria from "./hoteles/Factoria";
import Inn from "./hoteles/Inn";
import Amazon from "./hoteles/Amazon";
import Tucanes from "./hoteles/Tucanes";
import Girardot from "./hoteles/Girardot";
import Dosplayas from "./hoteles/Dosplayas";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navegador />
      <br/>
      <br/>
      <br/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bluereef" element={<Bluereef />} />
        <Route path="/bluecove" element={<Bluecove />} />
        <Route path="/tower" element={<Tower />} />
        <Route path="/tone" element={<Tone />} />
        <Route path="/coral" element={<Coral />} />
        <Route path="/hill" element={<Hill />} />
        <Route path="/acantilado" element={<Acantilado />} />
        <Route path="/wayira" element={<Wayira />} />
        <Route path="/caribe" element={<Caribe />} />
        <Route path="/factoria" element={<Factoria />} />
        <Route path="/inn" element={<Inn />} />
        <Route path="/amazon" element={<Amazon/>} />
        <Route path="/tucanes" element={<Tucanes/>} />
        <Route path="/girardot" element={<Girardot/>} />
        <Route path="/dosplayas" element={<Dosplayas/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
