import React from "react";
import { Header } from "./components/header/Header";
import "./App.css";
import { SideBar } from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
