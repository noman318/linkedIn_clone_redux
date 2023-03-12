import React, { useEffect } from "react";
import { Header } from "./components/header/Header";
import "./App.css";
import { SideBar } from "./components/sidebar/SideBar";
import Feed from "./components/feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { Login } from "./components/login/Login";
import { auth } from "./firebaseConfig";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // loggedIn
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <SideBar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
