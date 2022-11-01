import React, { useState, useEffect } from "react";
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
    navigate("/user");
  };
  const [userLocal, setUserLocal] = useState([]);
  useEffect(() => {
    localStorage.setItem("userLocal", JSON.stringify(username));
  }, [userLocal, username]);
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
