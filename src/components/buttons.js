import { Button as RSButton } from "reactstrap";

import styled from "react-emotion";

import * as colors from "./colors";

export const Button = styled(RSButton)`
  color: ${colors.color2};
  background-color: ${colors.color4};
  border-color: ${colors.color1};
  margin: 5px;
`;
