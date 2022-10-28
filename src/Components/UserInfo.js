import React, { useState, useEffect } from "react";
import { getUserInfo } from "../Actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import User from "../Components/User.js";
function UserInfo() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const [username, setUsername] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("");
    dispatch(getUserInfo(username));
    console.log(user);
  };

  return <>{user && <User user={user} />}</>;
}

export default UserInfo;
