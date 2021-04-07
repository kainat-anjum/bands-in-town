import styled from "styled-components";
import { ContainerPadding } from "../../commons/styles";
import { colors, device } from "../../commons/variables";
import { HeaderStyled } from "../../components/Header/style";

export const ArtistEventsPageWrapper = styled.main`
  .back-link {
    display: flex;
    align-items: center;
    color: #03a9f4;

    svg {
      width: 30px;

      path {
        fill: #03a9f4;
      }
    }
  }

  @media ${device.mobileL} {
    ${HeaderStyled} {
      justify-content: center;
    }
  }
`;

export const ArtistWrapperStyled = styled.section`
  ${ContainerPadding}

  background-color: ${colors.primaryColor};
  /* height: calc(100vh - 150px); */
  padding-top: 50px;
  color: #fff;

  .events-heading {
    margin-top: 80px;
    font-weight: 400;
    font-size: 32px;
  }

  .artist-details {
    .upcoming-events-heading {
      margin-bottom: 15px;
      color: #84859c;
    }

    .artist-name {
      font-size: 36px;
      color: #fff;
      margin: 0;
    }
  }

  .no-events-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    color: #fff;
    border-top: 1px solid #2d2d2f;
    padding-top: 50px;
  }
`;

export const DescriptionStyled = styled.p`
  margin-top: 0;
  font-weight: 300;
  font-size: 14px;
  color: #d2d4da;
`;

export const ButtonStyled = styled.a`
  width: fit-content;
  margin-right: 15px;
  background: #03a9f4;
  color: #fff;
  padding: 8px 20px;
  border-radius: 3px;
  border: none;
  outline: none;

  @media ${device.tablet} {
    padding: 8px 12px;
  }
`;

export const ArtistDetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;

  .artist-image {
    width: 150px;
    height:150px;
    object-fit:cover;
    border-radius: 50%;
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const EventsSectionStyled = styled.section`
  display: grid;
  grid-template-rows: auto;
  margin-top: 30px;
  align-items: center;

  h3 {
    color: #84859c;
    font-weight: 300;
    font-size: 16px;
  }

  .table-columns-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    border-top: 1px solid #2c3046;
    padding: 15px 0;
    font-size: 14px;

    p {
      text-transform: capitalize;
    }

    &:first-child {
      border-top: none;
    }

    @media ${device.mobileL} {
      grid-template-columns: repeat(6, 100px);
      grid-gap: 20px;
    }
  }

  @media ${device.mobileL} {
    overflow-x: scroll;
  }
`;

export const ActionsWrapperStyled = styled.section`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;

    path {
      fill: #fff;
    }

    &:first-of-type {
      margin-right: 10px;
    }
  }

  .facebook-icon-wrapper {
    display: flex;
  }
`;

export const TicketWrapperStyled = styled.p`
  /* color:#d2d4da; */
  margin: 10px 0 20px;
  span {
    color: #fff;
    margin-left: 5px;
  }
`;
