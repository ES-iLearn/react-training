import { FunctionComponent, useState } from "react";
import NewBug from "../bugform/NewBug";
import { BugData, BugStatus } from "../BugsData";
import BugInfo from "./BugInfo";
import styles from './BugList.module.css';

interface BugListProps {
  bugs: BugData[];
  addNewBug: Function;
}

const BugList: FunctionComponent<BugListProps> = (props) => {

  const addNewBug = (title :any) => {
    props.addNewBug(title);
  }


  return (
    <div className={styles.buglist}>
      <NewBug bugAdded={addNewBug}></NewBug>
      <ul className={styles.bugsul}>
        {props.bugs.map((b: BugData) => {
          return <BugInfo bug={b} key={b.id}></BugInfo>;
        })}
      </ul>
    </div>
  );
};

export default BugList;
