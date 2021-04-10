import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Feed from "./Component/FeedSection/feed";
import Header from "./Component/Header/header";
import Login from "./Component/login/login";
import SideBar from "./Component/Sidebar/sideBar";
import Widgets from "./Component/widget section/widgets";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
