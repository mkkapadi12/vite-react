import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Get from "./Get.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Get/>
  </StrictMode>
);
