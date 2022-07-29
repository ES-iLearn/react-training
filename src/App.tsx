import React, { useState } from "react";
import "./App.css";
import BugList from "./buglist/BugList";
import Header from "./ui/Header";
import bugs, { BugData, BugStatus } from "./BugsData";


function App() {

  const [bugList, updateBugList] = useState(bugs);

  const addNewBug = (title: string) => {

    const newId = bugList.length;

    const newBug: BugData = {
      title,
      id: newId,
      created: new Date(),
      status: BugStatus.reported
    }
    
    updateBugList([...bugList, newBug]);

    console.log(bugList.length);

  }


  return (
    <div className="App">
      <Header bugs={bugList} title="Bug Tracker"></Header>
      <BugList bugs={bugList} addNewBug={addNewBug}></BugList>
    </div>
  );
}

export default App;
