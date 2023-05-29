import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./objects/Card";
import Player from "./objects/Player";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Player player="x" />
    </>
  );
}

export default App;
