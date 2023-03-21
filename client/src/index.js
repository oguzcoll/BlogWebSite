import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/Context";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
