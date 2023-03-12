import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LinkedIn from "../../assets/linkedinLogo.png";
import { auth } from "../../firebaseConfig";
import { login } from "../../features/userSlice";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register link");
    if (!name) {
      return alert("Enter name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() =>
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            )
          );
      })
      .catch((error) => alert(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <div className="login">
      <img src={LinkedIn} alt="linkedInLogo" />
      <form action="">
        <input
          placeholder="Enter Full Name(Required) if Registering"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter Profile URL(Optional)"
          type="text"
          name="photo"
          id="photo"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder="Enter Email(Required)"
          required
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password(Required)"
          required
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      <p className="link">
        Not a member?{" "}
        <span className="register" onClick={handleRegister}>
          Register Now
        </span>
      </p>
    </div>
  );
};
