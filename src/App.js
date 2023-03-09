import React from "react";
import { Header } from "./components/header/Header";
import "./App.css";
import { SideBar } from "./components/sidebar/SideBar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
