import React, { useState } from "react";
import classes from "./Home.module.css";
import { getUserInfo } from "../../Actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("");
    dispatch(getUserInfo(username));
    console.log(user);
    navigate("/user");
  };
  return (
    <div className={classes.search}>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Home;
