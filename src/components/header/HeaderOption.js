import React from "react";
import "../header/HeaderOption.css";
import { Avatar } from "@mui/material";

export const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_Icons" />}
      {avatar && <Avatar className="headerOption_Icons" src={avatar} />}
      <h6 className="headerOption_Title">{title}</h6>
    </div>
  );
};
