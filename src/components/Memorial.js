import React from "react";
import parse from "date-fns/parse";
import format from "date-fns/format";

//styling
import { Col, Row } from "reactstrap";
import styled, { css } from "react-emotion";
import * as colors from "./colors";

const dynamicText = props => css`
  font-size: ${props.fontSize};
  display: flex;
  justify-content: center;
`;

const MemorialText = styled(Row)(dynamicText);

const memorialContainer = css`
  border: 1px solid ${colors.color1};
  background: ${colors.color1};
  border-radius: 5px;
  margin: 5px;
  height: 150px;
`;

export const Memorial = ({ name, creationDate }) => {
  return (
    <Col className={`${memorialContainer}`} xs={11} sm={5} md={5} lg={3}>
      {name ? (
        <MemorialText fontSize={"20px"}>
          {name.last}, {name.first}
        </MemorialText>
      ) : (
        <MemorialText>Unnamed</MemorialText>
      )}
      <MemorialText>{format(parse(creationDate), "MM/DD/YYYY")}</MemorialText>
    </Col>
  );
};
