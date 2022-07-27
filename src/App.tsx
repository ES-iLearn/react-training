import React from "react";
import "./App.css";
import BugList from "./buglist/BugList";
import Header from "./ui/Header";

function App() {
  return (
    <div className="App">
      <Header title="Bug Tracker"></Header>
      <BugList></BugList>
    </div>
  );
}

export default App;
