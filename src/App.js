import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import "./App.css";
import "./NewsApp.css";
import Examples from "./components/examples";
import Examples2 from "./components/examples2";
import Examples3 from "./components/examples3";
import Examples4 from "./components/examples4";
import Examples5 from "./components/examples5";
import Examples6 from "./components/examples6.js";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={Examples} path="/Examples" />
          <Route component={Examples2} path="/Examples2" />
          <Route component={Examples3} path="/Examples3" />
          <Route component={Examples4} path="/Examples4" />
          <Route component={Examples5} path="/Examples5" />
          <Route component={Examples6} path="/Examples6" />
      </div>
    </BrowserRouter>
  );
}
