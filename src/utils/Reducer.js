import { INIT_GARLANDS } from "./ActionTypes";

export const garlandInitialState = {
  garlands: [],
};

export const garlandReducer = (state, action) => {
  switch (action.type) {
    case INIT_GARLANDS:
      return { ...state, garlands: [...action.payload] };

    default:
      break;
  }
};
