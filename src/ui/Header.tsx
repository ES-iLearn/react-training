import './Header.css';

import { FunctionComponent } from "react";

interface HeaderProps {
  title: string;
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
