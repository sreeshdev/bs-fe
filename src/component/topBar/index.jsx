import React from "react";
import "./styles.scss";
const TopBar = ({ title, isRight, rightContent }) => {
  return (
    <div className="topbar">
      <div>{title}</div>
      {isRight && <div className="right">{rightContent}</div>}
    </div>
  );
};

export default TopBar;
