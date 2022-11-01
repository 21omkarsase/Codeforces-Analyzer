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

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const userRatingReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_RATING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_RATING_SUCCESS:
      return {
        ...state,
        loading: false,
        contests: action.payload,
      };
    case USER_RATING_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
