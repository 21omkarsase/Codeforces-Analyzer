import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../UserInfo/User";
import Loader from "../Layout/Loader";
import { getUserInfo } from "../../Actions/userAction";
import Error from "../Layout/Error";

function UserInfo() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.userInfo);
  useEffect(() => {
    const val = localStorage.getItem("userLocal");
    const nameVals = val.split(`"`);
    if (val) {
      dispatch(getUserInfo(nameVals[1]));
    }
  }, [localStorage.getItem("userLocal")]);

  return (
    <>
      {!error && !loading && user && <User user={user} />}
      {!error && loading && <Loader />}
      {error && <Error error={error} />}
    </>
  );
}

export default UserInfo;
