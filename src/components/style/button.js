import { Button as RSButton } from "reactstrap";

import styled from "react-emotion";

import * as colors from "../style/colors";

export const Button = styled(RSButton)`
  color: ${colors.color5};
  background-color: ${colors.color1};
  border-color: ${colors.color5};
  margin-right: 10px;
`;
