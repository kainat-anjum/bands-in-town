import React from "react";

import { HeaderStyled } from "./style";

export const Header = (props) => {
  return <HeaderStyled>{props.children}</HeaderStyled>;
};
