import React from "react";
import "./App.css";
import DataContextProvider from "./contexts/DataContext";
import NavBar from "./components/NavBar";
import DataLoop from "./components/DataLoop";
import DataForm from "./components/DataForm";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <NavBar></NavBar>
        <DataLoop></DataLoop>
        <DataForm></DataForm>
      </DataContextProvider>
    </div>
  );
}

export default App;
