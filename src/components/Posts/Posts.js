import React from "react";
import "./Posts.css";
import { Avatar } from "@mui/material";
import InputOptions from "../inputOptions/InputOptions";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export const Posts = ({ name, description, photoUrl, message }) => {
  return (
    <div className="posts">
      <div className="post_headers">
        <Avatar />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title="Like" color={"gray"} />
        <InputOptions Icon={ChatOutlined} title="Comment" color={"gray"} />
        <InputOptions Icon={ShareOutlined} title="Share" color={"gray"} />
        <InputOptions Icon={SendOutlined} title="Send" color={"gray"} />
      </div>
    </div>
  );
};
