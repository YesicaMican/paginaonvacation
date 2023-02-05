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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navegador />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bluereef" element={<Bluereef />} />
        <Route path="/bluecove" element={<Bluecove />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
