import styled, { css } from "react-emotion";
import * as colors from "../components/colors";
import { Row } from "reactstrap";

const dynamicText = props => css`
  font-size: ${props.fontSize};
  padding-bottom: ${props.paddingbottom};
  display: flex;
  justify-content: center;
`;

export const MemorialText = styled(Row)(dynamicText);

export const memorialContainer = css`
  border: 1px solid ${colors.color1};
  background: ${colors.color1};
  border-radius: 5px;
  margin: 5px;
  padding: 15px;
  height: 150px;
  transition: all 0.2s;
  &:hover {
    background: ${colors.color5};
    color: white;
  }
`;
