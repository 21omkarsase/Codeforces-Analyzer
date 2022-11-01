import React from "react";
import { useSelector } from "react-redux";
import User from "../Components/User.js";
import Loader from "../Components/Layout/Loader";
function UserInfo() {
  const { user, loading } = useSelector((state) => state.userInfo);
  return (
    <>
      {user && <User user={user} />}
      {loading && <Loader />}
    </>
  );
}

export default UserInfo;
