import { FunctionComponent } from "react";
import { BugData, BugStatus } from "../BugsData";
import './StatusBar.css';

interface StatusBarProps {
  bugs: BugData[];
}

const StatusBar: FunctionComponent<StatusBarProps> = (props) => {
  const maxVal = props.bugs.length;
  const bugStatuses: any[] = [];

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

  const getStatusVal = (status: BugStatus) => {
    const value = props.bugs.filter((b) => b.status === status).length;
    const color = getStatusText(status).color;

    return { value, color };
  };

  Object.values(BugStatus).map((s) => {
    if (typeof s === "number") {
      bugStatuses.push(getStatusVal(s));
    }
    return null;
  });

  return (
    <div className="statusbar">
      {bugStatuses.map((bugStatus) => {
        const percent = bugStatus.value / maxVal * 100; 
        return <div className="statusbarItem" style={{width: `${percent}%`, backgroundColor: bugStatus.color}}></div>;
      })}
    </div>
  );
};

export default StatusBar;
