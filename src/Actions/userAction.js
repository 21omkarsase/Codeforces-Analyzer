import axios from "axios";
import {
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from "../Constants/UserConstatns";
import {
  USER_RATING_FAIL,
  USER_RATING_REQUEST,
  USER_RATING_SUCCESS,
} from "../Constants/RatingConstants";
import {
  USER_SUBMISSION_FAIL,
  USER_SUBMISSION_REQUEST,
  USER_SUBMISSION_SUCCESS,
} from "../Constants/SubmissionConstants";

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
      }
    } catch (error) {
      dispatch({ type: USER_FAIL, payload: error.response.data });
    }
  };

export const getUserContests =
  (username = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_RATING_REQUEST });
      const { data } = await axios.get(
        `https://codeforces.com/api/user.rating?handle=${username}`
      );
      if (data.status === "OK") {
        dispatch({ type: USER_RATING_SUCCESS, payload: data.result });
      }
    } catch (error) {
      dispatch({ type: USER_RATING_FAIL, payload: error.response.data });
    }
  };

export const getSubmissions =
  (username = "", count = 10) =>
  async (dispatch) => {
    console.log("start");
    try {
      dispatch({ type: USER_SUBMISSION_REQUEST });
      const { data } = await axios.get(
        `https://codeforces.com/api/user.status?handle=${username}&from=1&count=${count}`
      );
      console.log(data);
      if (data.status === "OK") {
        dispatch({ type: USER_SUBMISSION_SUCCESS, payload: data.result });
      }
    } catch (error) {
      dispatch({ type: USER_SUBMISSION_FAIL, payload: error.response.data });
    }
  };
