import { setArtist, setArtistEvents } from "../actions/actions";

//search artist for name input
export const triggerSearch = async (value, dispatch) => {
  const api_call = await fetch(
    `https://rest.bandsintown.com/artists/${value}?app_id=333`
  );
  const api_result = await api_call.json();
  dispatch(setArtist(api_result, value));
};

//get events for name input
export const getEvents = async (name, dispatch) => {
  const api_call = await fetch(
    `https://rest.bandsintown.com/artists/${name}/events?app_id=333`
  );
  const api_result = await api_call.json();
  dispatch(setArtistEvents(api_result));
};
