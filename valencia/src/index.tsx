import * as React from "react";
import * as ReactDOM from "react-dom";

import { Routes } from "./routes";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "./App.css"; 

ReactDOM.render(
  <Routes />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
