import React from "react";

//redux
import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Container, Row } from "reactstrap";
import styled from "react-emotion";
// import * as colors from "../components/colors";

//components
import { Memorial } from "../components/Memorial";
import { Button } from "../components/buttons";

const Hero = styled(Container)`
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1)),
    url(${require("../assets/handHolding.jpeg")}) no-repeat fixed;
  background-size: cover;
  background-position: 50% 65%;
  padding: 80px 0;
  margin-bottom: 15px;
`;

const Title = styled("h1")`
  font-family: "Charmonman", cursive;
  font-size: 90px;
  padding: 40px 0;
`;

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
          <Memorial
            name={{ last: "fillston", first: "Barbara" }}
            creationDate={32521512235}
          />
          <Memorial
            name={{ last: "fillston", first: "Barbara" }}
            creationDate={32521512235}
          />
          <Memorial
            name={{ last: "fillston", first: "Barbara" }}
            creationDate={323325235232535}
          />
          <Memorial
            name={{ last: "fillston", first: "Barbara" }}
            creationDate={32521512235}
          />
          <Memorial
            name={{ last: "fillston", first: "Barbara" }}
            creationDate={32521512235}
          />
          {props.memorials.map((memorial, key) => {
            const { name, creationDate } = memorial;
            console.log(memorial.name);
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
