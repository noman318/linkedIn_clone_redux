import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOptions from "../inputOptions/InputOptions";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import { Posts } from "../Posts/Posts";
import { db } from "../../firebaseConfig";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPosts = (e) => {
    e.preventDefault();
    console.log("send");
    db.collection("posts").add({
      name: "Noman Shaikh",
      description: "Hey,",
      message: input,
      photoUrl:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type={"text"}
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
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
      {posts?.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}
export default Feed;
