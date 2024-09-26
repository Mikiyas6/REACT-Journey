import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexDirection = "column";
rootElement.style.gap = "10px";
rootElement.style.alignItems = "center";
rootElement.style.justifyContent = "center";

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
