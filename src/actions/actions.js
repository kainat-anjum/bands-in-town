export const SEARCH_ARTIST = "Search_Artist";
export const GET_ARTIST_EVENTS = "Get_Artist_Events";
export const SET_VALUE = "Set_Value";

export const setArtist = (data, value) => {
  return {
    type: SEARCH_ARTIST,
    payload: { artist: data, searchInputValue: value, searchedValue: value },
  };
};

export const setArtistEvents = (data) => {
  return { type: GET_ARTIST_EVENTS, payload: { artistEvents: data } };
};

export const setInputValue = (name) => {
  return { type: SET_VALUE, payload: { searchInputValue: name } };
};
