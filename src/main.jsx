// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
