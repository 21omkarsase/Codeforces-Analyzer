import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../UserInfo/User";
import Loader from "../Layout/Loader";
import Error from "../Layout/Error";

function UserInfo() {
  const { user, loading, error } = useSelector((state) => state.userInfo);
  return (
    <>
      {loading && <Loader />}
      {!loading && user && <User user={user} />}
      {!loading && !user && error && <Error error={error} />}
    </>
  );
}

export default UserInfo;
