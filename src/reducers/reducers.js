import {
  SEARCH_ARTIST,
  GET_ARTIST_EVENTS,
  SET_VALUE,
} from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SEARCH_ARTIST:
      return { ...state, ...action.payload };

    case GET_ARTIST_EVENTS:
      return { ...state, ...action.payload };

    case SET_VALUE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
