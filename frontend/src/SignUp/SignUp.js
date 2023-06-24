import React, { useState, useEffect } from "react";
import "./SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../Config/Config";
import { signInWithPopup } from "firebase/auth";
import icon2 from "../apple.svg";
import icon1 from "../google-icon.png";

function SignUp({ setLoginUser }) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);

      value && navigate("/dash");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      console.log("Succesfull");
      axios
        .post("http://localhost:5000/login", user)
        .then((res) => {
          console.log(res);
          setLoginUser(res.data.user);
          navigate("/dash");
        })
        .catch((error) => {
          alert("Invalid email or password. Click on Register.");
        });
    } else {
      alert("Fill all the Fields!");
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <h1 className="heading">Board.</h1>
      </div>
      <div className="right-container">
        <div className="top">
          <h2>Sign In</h2>
          <p className="header-p">Sign in to your account</p>
          <div className="top-1">
            <div className="top-first" onClick={handleClick}>
              <img className="google-icon" src={icon1} alt="" />
              <p>Sign in with Google</p>
            </div>

            <div className="top-second">
              <img src={icon2} alt="" />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className="top-2">
            <p>Email Address</p>
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
            <h4>Forget Password?</h4>
            <button onClick={login}>Sign In</button>
          </div>
        </div>
        <div className="bottom">
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
