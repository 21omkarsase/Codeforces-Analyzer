import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../UserInfo/User";
import Loader from "../Layout/Loader";
import { getUserInfo } from "../../Actions/userAction";
import Error from "../Layout/Error";
import { useParams, useNavigate } from "react-router-dom";

function UserInfo() {
  const navigate = useNavigate();
  const { username } = useParams();
  console.log(username);
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getUserInfo(username));
    if (!user) {
      console.log("yes");
      navigate("/");
    } else console.log("not");
  }, [username]);

  return (
    <>
      {!error && !loading && user && <User user={user} />}
      {!error && loading && <Loader />}
      {error && <Error error={error} />}
    </>
  );
}

export default UserInfo;
