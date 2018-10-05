import React from "react";
import parse from "date-fns/parse";
import format from "date-fns/format";

//styling
import { Col } from "reactstrap";

import { MemorialText, memorialContainer } from "./styles";

const Memorial = ({ name, creationDate }) => {
  return (
    <Col className={`${memorialContainer}`} xs={11} sm={5} md={5} lg={3}>
      {name ? (
        <MemorialText fontSize={"20px"} paddingbottom={"30px"}>
          {name.last}, {name.first}
        </MemorialText>
      ) : (
        <MemorialText fontSize={"20px"} paddingbottom={"30px"}>
          Unnamed
        </MemorialText>
      )}
      <MemorialText>{format(parse(creationDate), "MM/DD/YYYY")}</MemorialText>
    </Col>
  );
};

export default Memorial;
