import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Register.css";
import icon1 from "../google-icon.png";
import { useNavigate } from "react-router-dom";
import icon2 from "../apple.svg";
import { auth, provider } from "../Config/Config";
import { signInWithPopup } from "firebase/auth";

function Register() {
  const [value, setValue] = useState({});

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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, confirmPassword } = user;
    if (name && email && password && password === confirmPassword) {
      axios
        .post("http://localhost:5000/register", user)
        .then((res) => console.log(res));
      navigate("/dash");
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
          <h2>Register</h2>
          <div className="top-1">
            <div className="top-first" onClick={handleClick}>
              <img src={icon1} alt="" />
              <p> Sign in with google</p>
            </div>
            <div className="top-second">
              <img src={icon2} alt="" />
              <p>Sign in with Apple</p>
            </div>
          </div>
          <div className="top-2">
            <p>Enter Name</p>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
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
            <p>Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirPassword}
              placeholder="Confirm Your Password"
              onChange={handleChange}
            />
            <button onClick={register}>Sign Up</button>
          </div>
        </div>
        <div className="bottom">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
