import React from 'react';
import ReactDOM from "react-dom/client";
import  App  from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";



let element = document.getElementById("root");


let rootElement = ReactDOM.createRoot(element)


rootElement.render(<App/>)