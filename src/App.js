import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import APIGo from "./components/APIGo";

import "./App.css";
import Nasa from "./components/Nasa";
import LastFm from "./components/LastFm";
import NavBar from "./components/NavBar";
import Examples from "./components/Examples"
export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
          <Route component={APIGo} path="/" exact />
          <Route component={APIGo} path="/APIGo" exact />
          <Route component={Examples} path="/Examples" />
          <Route component={LastFm} path="/LastFm" />
          <Route component={Nasa} path="/Nasa" />
      </div>
    </BrowserRouter>
  );
}
