import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css"; // Importação de estilos

import App from "./App"; // Importação do componente App

import reportWebVitals from "./reportWebVitals"; // Importação para métricas de performance

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Função para medir performance

reportWebVitals();
