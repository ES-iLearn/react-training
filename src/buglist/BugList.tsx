import { FunctionComponent } from "react";
import NewBug from "../bugform/NewBug";
import bugs, { BugData } from "../BugsData";
import BugInfo from "./BugInfo";
import styles from './BugList.module.css';

interface BugListProps {}

const BugList: FunctionComponent<BugListProps> = () => {

  const addNewBug = (title: string) => {
    console.log('New bug added: ', title)
  }


  return (
    <div className={styles.buglist}>
      <NewBug bugAdded={addNewBug}></NewBug>
      <ul>
        {bugs.map((b: BugData) => {
          return <BugInfo bug={b}></BugInfo>;
        })}
      </ul>
    </div>
  );
};

export default BugList;
