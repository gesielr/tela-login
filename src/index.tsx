import React from "react";
import ReactDOM from "react-dom/client"; // Alterado para usar o novo módulo do React 18
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
