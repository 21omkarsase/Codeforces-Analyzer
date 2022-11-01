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
    } catch (error) {
      dispatch({ type: USER_FAIL, payload: error });
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
      dispatch({ type: USER_RATING_SUCCESS, payload: data.result });
    } catch (error) {
      dispatch({ type: USER_RATING_FAIL, payload: error });
    }
  };
