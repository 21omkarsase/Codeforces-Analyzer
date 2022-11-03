import React, { useState } from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/user/${username}`);
    setUsername("");
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
