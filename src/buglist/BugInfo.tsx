import { FunctionComponent } from "react";
import { BugData, BugStatus } from "../BugsData";
import DateCard from "../ui/DateCard";
import styles from "./BugInfo.module.css";

interface BugInfoProps {
  bug: BugData;
}

const BugInfo: FunctionComponent<BugInfoProps> = (props) => {

  const getStatusText = (status: BugStatus) => {
    switch (status) {
      case BugStatus.reported:
        return { text: "Reported", color: "red" };
      case BugStatus.indev:
        return { text: "Developed", color: "blue" };
      case BugStatus.inqa:
        return { text: "In Testing", color: "purple" };
      case BugStatus.resolved:
        return { text: "Resolved", color: "green" };
      case BugStatus.reopened:
        return { text: "Rework", color: "orange" };
      default:
        return { text: "Unknown", color: "magenta" };
    }
  };

  const bugStausInfo = getStatusText(props.bug.status);

  return (
    <li className={styles.buginfo}>
      <DateCard date={props.bug.created}></DateCard>
      <h2>{props.bug.title}</h2>
      <h2 style={{ color: bugStausInfo.color }}>{bugStausInfo.text}</h2>
      <button className={styles.deleteButton}>❌</button>
    </li>
  );
};

export default BugInfo;
