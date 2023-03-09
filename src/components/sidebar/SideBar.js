import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

export const SideBar = () => {
  const recentItems = (topics) => (
    <div className="side_recentItems">
      <span className="recentItems_Hash">#</span>
      <p>{topics}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1675806963317-6fbf3b6d61ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Shaikh Noman</h2>
        <h4>noman@gmail.com </h4>
      </div>
      <div className="side_stats">
        <div className="side_bar_stat">
          <p>Who viewed you </p>
          <p className="side_bar_statNumber">2,500</p>
        </div>
        <div className="side_bar_stat">
          <p>Views on Post</p>
          <p className="side_bar_statNumber">3,347</p>
        </div>
      </div>
      <div className="sidebar_buttom">
        <p>Recent</p>
        <p>{recentItems("React.js")}</p>
        <p>{recentItems("React.js")}</p>
        <p>{recentItems("React.js")}</p>
      </div>
    </div>
  );
};
