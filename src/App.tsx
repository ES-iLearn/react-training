import React, { useState } from "react";
import "./App.css";
import BugList from "./buglist/BugList";
import Header from "./ui/Header";
import bugs, { BugData, BugStatus } from "./BugsData";
import Demo from "./DemoComponent";

function App() {
  const [bugList, updateBugList] = useState(bugs);

  const addNewBug = (title: string) => {
    const newId = bugList.length;

    const newBug: BugData = {
      title,
      id: newId,
      created: new Date(),
      status: BugStatus.reported,
    };
    updateBugList([...bugList, newBug]);
    console.log(bugList.length);
  };

  const deleteBug = (id: number) => {
    updateBugList([...bugList.filter((b) => b.id !== id)]);
  };

  return (
    <div className="App">
      <Header bugs={bugList} title="Bug Tracker"></Header>
      <BugList
        bugs={bugList}
        addNewBug={addNewBug}
        deleteBug={deleteBug}
      ></BugList>
      <Demo title="demo title" styleName=""></Demo>
    </div>
  );
}

export default App;
