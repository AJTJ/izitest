import React from "react";

import { Container, Col, Row } from "reactstrap";

export const Memorial = ({ key, name, creationDate }) => {
  return (
    <Container>
      <Row>
        {name ? (
          <Col>
            {name.last}, {name.first}
          </Col>
        ) : (
          <Col>Unnamed</Col>
        )}
        <Col>{creationDate}</Col>
      </Row>
    </Container>
  );
};
