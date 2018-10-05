import { Container } from "reactstrap";
import styled, { css } from "react-emotion";

import { mq } from "../components/mediaQueries";

export const Hero = styled(Container)`
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url(${require("../assets/handHolding.jpeg")}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 65%;
  padding: 80px 0;
  margin-bottom: 15px;
`;

const titleMq = css({
  [mq[2]]: {
    fontSize: "90px"
  }
});

export const Title = styled("h1")`
  font-family: "Charmonman", cursive;
  font-size: 60px;
  padding: 40px 0;
  ${titleMq};
`;
