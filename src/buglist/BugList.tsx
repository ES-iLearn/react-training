import { FunctionComponent } from "react";
import bugs, { BugData } from "../BugsData";
import BugInfo from "./BugInfo";
import styles from './BugList.module.css';

interface BugListProps {}

const BugList: FunctionComponent<BugListProps> = () => {
  return (
    <div className={styles.buglist}>
      <ul>
        {bugs.map((b: BugData) => {
          return <BugInfo bug={b}></BugInfo>;
        })}
      </ul>
    </div>
  );
};

export default BugList;
