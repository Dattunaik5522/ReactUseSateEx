import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Usestateex from "./use-state";
import UseEffectEx from "./useEffect/useEffectBasics";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Usestateex />
    <UseEffectEx />
  </React.StrictMode>
);
