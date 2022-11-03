import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../Actions/userAction";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const fetchUserDetails = () => {
    dispatch(getUserInfo(username));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchUserDetails();
    setUsername("");
    navigate(`/user/${username}`);
  };
  return (
    <div className={classes.search}>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter Codeforces username"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Home;
