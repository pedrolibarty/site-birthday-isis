import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GuestProvider } from "./contexts/GuestContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GuestProvider>
        <App />
      </GuestProvider>
    </BrowserRouter>
  </StrictMode>
);
