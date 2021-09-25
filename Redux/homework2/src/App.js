import React from "react";

import "./app.css";

import Header from "./components/Header/Header";
import Money from "./components/Money/Money";
import Cards from "./components/Cards/Cards";
import Receipt from "./components/Receipt/Receipt";

function App() {
  return (
    <div className="App">
      <Header />
      <Money />
      <Cards />
      <Receipt />
    </div>
  );
}

export default App;