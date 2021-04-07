import { React } from "react";
import { CardStyled } from "./style";

export const Card = (props) => {
  const { image, name } = props;

  return (
    <CardStyled to="/artist">
      <img className="artist-image" src={image} alt="artist-image" />
      <p className="artist-name">{name}</p>
    </CardStyled>
  );
};
