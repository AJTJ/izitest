import React from "react";

//redux
import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Container, Row } from "reactstrap";
import styled, { css } from "react-emotion";
import * as colors from "../components/colors";

//components
import { Memorial } from "../components/Memorial";
import { Button } from "../components/buttons";

const hero = css`
  background: ${colors.color1};
  padding: 20px 0;
  margin-bottom: 15px;
`;

const Title = styled("h1")`
  font-size: 90px;
  padding: 40px 0;
`;

const Homepage = props => {
  return (
    <React.Fragment>
      <Container fluid className={`${hero}`}>
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
      </Container>
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
