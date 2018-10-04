import React from "react";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Container, Row } from "reactstrap";

import { Button } from "../components/style/button";

import { Memorial } from "../components/Memorial";

const Homepage = props => {
  return (
    <Container>
      <Row className=" d-flex justify-content-center">
        <h1>Memorials</h1>
      </Row>
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
          Order by last name
        </Button>
        {props.memorials.map((memorial, key) => {
          const { name, creationDate } = memorial;
          console.log(memorial.name);
          return (
            <React.Fragment key={key}>
              <Memorial name={name || undefined} creationDate={creationDate} />
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
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
