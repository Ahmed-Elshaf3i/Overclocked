import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import "./i18n";

// Get root element from HTML
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

// Create React root and render app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
