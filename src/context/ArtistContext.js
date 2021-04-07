import { createContext } from "react";
import {initialState} from '../meta'

export const ArtistContext = createContext({
  state: { ...initialState },
  dispatch: () => undefined,
});
