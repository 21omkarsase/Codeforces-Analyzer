import { Action } from "@remix-run/router";
import axios from "axios";
import {
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from "../Constants/UserConstatns";

export const getUserInfo =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const { data } = await axios.get(
        `https://codeforces.com/api/user.info?handles=${username}`
      );
      if (data.status === "OK") {
        dispatch({ type: USER_SUCCESS, payload: data.result[0] });
      } else if (data.status === "FAILED") {
        throw new Error(data.comment);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_FAIL, payload: error });
    }
  };

export const getUserContests =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REQUEST });
      const { data } = await axios.get(
        `https://codeforces.com/api/user.rating?handle=${username}`
      );

      console.log(data, "userrating");
      if (data.status == "OK") {
        dispatch({ type: USER_SUCCESS, payload: data.result });
      } else {
        throw new Error("Invalid Username");
      }
    } catch (error) {
      dispatch({ type: USER_FAIL, payload: error });
    }
  };
