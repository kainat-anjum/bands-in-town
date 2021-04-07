import styled from "styled-components";
import { Link } from "react-router-dom";
import { device, colors } from "../../commons/variables";

export const CardStyled = styled(Link)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  align-items: center;
  background: ${colors.darkBlueColor};
  padding: 20px;
  cursor: pointer;

  .artist-image {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    object-fit: cover;
  }

  .artist-name {
    color: ${colors.whiteColor};
    font-weight: 500;
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    padding: 12px;
  }
`;
