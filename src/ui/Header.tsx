import './Header.css';
import { FunctionComponent } from "react";
import StatusBar from './StatusBar';
import { BugData } from '../BugsData';

interface HeaderProps {
  title: string;
  bugs: BugData[];
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <StatusBar bugs={props.bugs}></StatusBar>
    </div>
  );
};

export default Header;
