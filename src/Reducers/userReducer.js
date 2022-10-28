import {
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from "../Constants/UserConstatns";

export const userInfoReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_SUCCESS:
      return {
        loading: false,
        ...state,
        user: action.payload,
      };
    case USER_FAIL:
      return {
        loading: false,
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export const userRatingReducer = (state = { contest: null }, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case USER_SUCCESS:
      return {
        loading: false,
        ...state,
        contests: action.payload,
      };
    case USER_FAIL:
      return {
        loading: false,
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
