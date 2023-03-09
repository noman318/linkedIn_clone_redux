import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from "../inputOptions/InputOptions";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import { Posts } from "../Posts/Posts";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type={"text"} />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={ImageIcon} title="Photos" color="#70b5f9" />
          <InputOptions Icon={Subscriptions} title="Video" color="e7a33e" />
          <InputOptions Icon={EventNote} title="Events" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      <Posts />
    </div>
  );
}
export default Feed;
