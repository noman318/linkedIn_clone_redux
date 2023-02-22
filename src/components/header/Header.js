import React from "react";
import "../header/Header.css";
import {
  Search,
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from "@mui/icons-material";
import { HeaderOption } from "./HeaderOption";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://www.svgrepo.com/show/110195/linkedin.svg" alt="" />
        <div className="header_search">
          <Search />
          <input type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Networks" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar={"https://cdn-icons-png.flaticon.com/128/924/924915.png"}
        />
      </div>
    </div>
  );
};
