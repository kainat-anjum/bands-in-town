import React, { useReducer, useMemo, createContext } from "react";
import { triggerSearch } from "../helpers/helpers";
import { initialState } from "../meta";
import { reducer } from "../reducers/reducers";

export const ArtistContext = createContext({
  state: { ...initialState },
  dispatch: () => undefined,
});

export const ArtistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
};
