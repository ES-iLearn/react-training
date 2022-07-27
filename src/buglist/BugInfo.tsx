import { FunctionComponent } from "react";
import { BugData } from "../BugsData";
import styles from './BugInfo.module.css';

interface BugInfoProps {
  bug: BugData;
}

const BugInfo: FunctionComponent<BugInfoProps> = (props) => {
  return <li className={styles.buginfo}>
    <h2>{props.bug.title}</h2>
    <h2>{props.bug.status}</h2>
  </li>;
};

export default BugInfo;
