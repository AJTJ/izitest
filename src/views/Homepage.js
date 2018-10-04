import React from "react";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Container, Row, Button, Col } from "reactstrap";

const Homepage = props => {
  return (
    <Container>
      <Row>
        <Button
          onClick={() =>
            props.getMemorials({
              url: "https://dev.requiemapp.com/public/memorial/random"
            })
          }
        >
          Get memorials
        </Button>
        <Button onClick={() => props.orderMemorials()}>
          Re-order memorials
        </Button>
        {props.memorials.map((memorial, key) => {
          const { name, creationDate } = memorial;
          console.log(memorial.name);
          return (
            <Container>
              <Row key={key}>
                {name ? (
                  <Col>
                    {name.last}, {name.first}
                  </Col>
                ) : (
                  <Col />
                )}
                <Col>{creationDate}</Col>
              </Row>
            </Container>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return { memorials: state.memorialsReducer.memorials };
};

console.log(actions);

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
