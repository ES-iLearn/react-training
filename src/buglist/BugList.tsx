import { FunctionComponent } from "react";
import NewBug from "../bugform/NewBug";
import { BugData } from "../BugsData";
import BugInfo from "./BugInfo";
import styles from "./BugList.module.css";

interface BugListProps {
  bugs: BugData[];
  addNewBug: Function;
  deleteBug: Function;
}

const BugList: FunctionComponent<BugListProps> = (props) => {
  const addNewBug = (title: any) => {
    props.addNewBug(title);
  };

  const deleteBug = (id: Number) => {
    props.deleteBug(id);
  };

  return (
    <div className={styles.buglist}>
      <NewBug bugAdded={addNewBug}></NewBug>
      <ul className={styles.bugsul}>
        {props.bugs.map((b: BugData) => {
          return <BugInfo bug={b} key={b.id} deleteBug={deleteBug}></BugInfo>;
        })}
      </ul>
    </div>
  );
};

export default BugList;
