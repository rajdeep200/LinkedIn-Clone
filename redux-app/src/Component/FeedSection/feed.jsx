import React, { useState, useEffect } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "../inputOption/inputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ViewDayIcon from "@material-ui/icons/ViewDay";
import Post from "../Post/post";
import { db } from "../../firebase/firebase";
import firebase from "firebase/app";
import { selectUser, userSlice } from "../../features/userSlice";
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#0066ff" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#ff751a" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#94b8b8" />
          <InputOption
            Icon={ViewDayIcon}
            title="Write Article"
            color="#66ff33"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
