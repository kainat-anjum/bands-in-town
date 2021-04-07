import { React, useContext, useEffect } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LeftArrowIcon,
} from "../../commons/assets/svg";
import { Link } from "react-router-dom";

import { Header } from "../../components";
import { ArtistContext } from "../../context/ArtistContext";
import { getEvents, triggerSearch } from "../../helpers/helpers";
import {
  ArtistWrapperStyled,
  ButtonStyled,
  ArtistDetailsWrapper,
  EventsSectionStyled,
  ActionsWrapperStyled,
  ArtistEventsPageWrapper,
} from "./style";

export const Artist = () => {
  const { state, dispatch } = useContext(ArtistContext);

  //on page load get name from local storage and fetch events for that name
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      triggerSearch(name, dispatch);
    }
    getEvents(name, dispatch);
  }, []);

  return (
    <ArtistEventsPageWrapper>
      <Header>
        <Link to="/" className="back-link">
          <LeftArrowIcon />
          Back to home
        </Link>
      </Header>

      {state.artist &&
        <ArtistWrapperStyled>
          <ArtistDetailsWrapper>
            <img className="artist-image" src={state.artist.image_url} />

            <article className="artist-details">
              <p className="artist-name">{state.artist.name}</p>
              <p className="upcoming-events-heading">
                Upcoming Events:
                <span>{` ${state.artist.upcoming_event_count}`}</span>
              </p>

              <ActionsWrapperStyled>
                <ButtonStyled href={state.artist.url} target="_blank">
                  Profile
                </ButtonStyled>
                {state.artist.facebook_page_url && (
                  <>
                    <a
                      href={state.artist.facebook_page_url}
                      className="facebook-icon-wrapper"
                    >
                      <FacebookIcon />
                    </a>
                    <InstagramIcon />
                  </>
                )}
              </ActionsWrapperStyled>
            </article>
          </ArtistDetailsWrapper>

          {state.artistEvents.length ? ( //show events if artist has events other wise show no events found
            <>
              <h2 className="events-heading">Events</h2>

              <EventsSectionStyled>
                <article className="table-columns-wrapper">
                  <h3>Name</h3>
                  <h3>Venue:</h3>
                  <h3>City</h3>
                  <h3>Country</h3>
                  <h3>Tickets</h3>
                </article>

                {state.artistEvents &&
                  state.artistEvents.map((data, index) => (
                    <article key={index} className="table-columns-wrapper">
                      <p>{data.venue.name}</p>
                      <p>{data.venue.location}</p>
                      <p>{data.venue.city}</p>
                      <p>{data.venue.country}</p>
                      {data.offers.map((data, index) => (
                        <p key={index}>{data.status}</p>
                      ))}
                      <ButtonStyled href={data.url} target="_blank">
                        Buy Ticket
                      </ButtonStyled>
                    </article>
                  ))}
              </EventsSectionStyled>
            </>
          ) : (
            <section className="no-events-section">No Events</section>
          )}
        </ArtistWrapperStyled>
      }
    </ArtistEventsPageWrapper>
  );
};
