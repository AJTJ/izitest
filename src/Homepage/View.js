import React from "react";

import { connect } from "react-redux";
import { actions } from "../redux";

import { Container, Row } from "reactstrap";

import Memorial from "../Memorial/View";
import { Button } from "../components/buttons";
import { Hero, Title } from "./styles";

const Homepage = props => {
  return (
    <React.Fragment>
      <Hero fluid>
        <Row className={`d-flex justify-content-center`}>
          <Title>Memorials</Title>
        </Row>
        <Row className="d-flex justify-content-center">
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
            Order by last name
          </Button>
        </Row>
      </Hero>
      <Container>
        <Row className="d-flex justify-content-center">
          {props.memorials.map((memorial, key) => {
            const { name, creationDate } = memorial;
            return (
              <React.Fragment key={key}>
                <Memorial
                  name={name || undefined}
                  creationDate={creationDate}
                />
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { memorials: state.memorialsReducer.memorials };
};

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
