import React, { useContext, useEffect } from "react";

import {
  SearchBoxStyled,
  MainContentStyled,
  TrendingArtistGridStyled,
  TrendingArtistDetailsStyled,
  CardWrapperStyled,
  HomePageWrapperStyled,
} from "./style";
import { Card, Header } from "../../components";
import { triggerSearch } from "../../helpers/helpers";
import { ArtistContext } from "../../context/ArtistContext";
import { setInputValue } from "../../actions/actions";

export const Home = () => {
  
  //constants
  const TRENDING_ARTISTS = "Trending Artists";
  const TRENDING_DETAILS =
    "Dark Alley | Dream Your Moments, Until I met you, Gimme some courage";
  const MAIN_TITLE = "This Month's";
  const SUB_TITLE = "Record Breaking Artist";
  const TRENDING_SONG =
    " Dream your moments, Until I Met You, Gimme Some Courage, Dark  Alley, One More Of A Stranger, Endless Things, The Heartbeat Stops, Walking Promises, Desired Games and many more..";

  const { state, dispatch } = useContext(ArtistContext);

  //runs on page load - get name from local storage and trigger artist search for that name
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      triggerSearch(name, dispatch);
    }
  }, []);

  return (
    <HomePageWrapperStyled>
      
      <Header>
        <SearchBoxStyled
          placeholder="Search Artists Here"
          onSearch={(value) => {
            localStorage.setItem("name", value); //set searched name in local storage on click of search button
            dispatch(triggerSearch(value, dispatch));
          }}
          value={state.searchInputValue} //search box value is value input by user
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />

        <p className="header-details">
          <span>{TRENDING_ARTISTS}: </span>
          {TRENDING_DETAILS}
        </p>
      </Header>

      <MainContentStyled>
        <TrendingArtistGridStyled>
          <img
            className="top-artist-banner-image"
            src="/images/top-artist-banner.png"
            alt="Top artist banner image"
          />
          <TrendingArtistDetailsStyled>
            <article className="trendng-artist-details">{MAIN_TITLE}</article>
            {SUB_TITLE}
            <p className="trending-song">{TRENDING_SONG}</p>
          </TrendingArtistDetailsStyled>
        </TrendingArtistGridStyled>

        <p className="result-heading-styled">
          {state.artist && state.searchInputValue
            && `Result found for "${state.searchedValue}"`
           }
        </p>

        <CardWrapperStyled>
          {state.artist && (
            <Card
              to="/artist"
              image={state.artist.image_url}
              name={state.artist.name}
              url={state.artist.facebook_page_url}
            />
          )}
        </CardWrapperStyled>
      </MainContentStyled>
    </HomePageWrapperStyled>
  );
};
