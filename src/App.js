import "./App.scss";
import React, { useReducer, useMemo } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { reducer } from "./reducers/reducers";

import { Home } from "./pages/Home/Home";
import { Artist } from "./pages/Artist/Artist";
import { ArtistContext } from "./context/ArtistContext";
import { initialState } from "./meta";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
  return (
    <div className="App">
      <ArtistContext.Provider value={value}>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/artist" exact component={Artist} />
        </Router>
      </ArtistContext.Provider>
    </div>
  );
}

export default App;
