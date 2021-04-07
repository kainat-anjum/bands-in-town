import styled from "styled-components";
import { Input } from "antd";
import { colors, device } from "../../commons/variables";

const { Search } = Input;

export const HomePageWrapperStyled = styled.main`
  .header-details {
    color: ${colors.whiteColor};

    span {
      color: ${colors.secondaryColor};
    }

    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
`;

export const SearchBoxStyled = styled(Search)`
  .ant-input-group {
    display: flex;
    width: 400px;

    @media ${device.mobileL} {
      width: 200px;
    }
  }

  .ant-input {
    height: 35px;
    width: 100%;
    border-radius: 3px 0 0 3px;
    border: none;
    padding: 0 10px;

    &:focus {
      outline: none;
    }
  }

  .ant-input-search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    margin-right: 20px;
    border-radius: 0 3px 3px 0;
    border: none;
    background-color: ${colors.secondaryColor};
    cursor: pointer;

    &:focus {
      outline: none;
    }

    svg {
      fill: #fff;
    }
  }

  @media ${device.tablet} {
    margin-bottom: 10px;
  }
`;

export const MainContentStyled = styled.section`
  padding: 0 50px 50px;
  overflow-y: auto;
  background-color: ${colors.primaryColor};

  .result-heading-styled {
    margin-top: 50px;
    margin-bottom: 20px;
    color: ${colors.secondaryColor};
    font-weight: 500;
  }
`;

export const TrendingArtistGridStyled = styled.figure`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 50px;
  margin: 0;

  .top-artist-banner-image {
    @media ${device.mobileL} {
      width: 200px;
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const TrendingArtistDetailsStyled = styled.div`
  font-size: 32px;
  color: ${colors.secondaryColor};

  .trendng-artist-details {
    color: ${colors.whiteColor};
  }

  .trending-song {
    font-size: 18px;
    color: ${colors.betaGrayColor};
    max-width: 800px;
    margin-top: 10px;
  }
`;

export const CardWrapperStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;
