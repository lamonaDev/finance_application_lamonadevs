import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Silk from "./components/reactBits/backgrount.jsx";
<Silk speed={5} scale={1} color="#7B7481" noiseIntensity={1.5} rotation={0} />;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
