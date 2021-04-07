import styled from "styled-components";
import {ContainerPadding} from '../../commons/styles'
import {device,colors} from '../../commons/variables'

export const HeaderStyled = styled.div`
  ${ContainerPadding}
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.darkBlueColor};
  height: 100px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 50px;
  }
`;