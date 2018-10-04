import React from "react";

import { connect } from "react-redux";
import { actions } from "../redux/index";

const Homepage = props => {
  console.log("props in home", props);
  console.log("memorials in home", props.memorials);
  return (
    <div>
      <button
        onClick={() =>
          props.getMemorials({
            url: "https://dev.requiemapp.com/public/memorial/random"
          })
        }
      >
        Get memorials
      </button>
      <button onClick={() => props.orderMemorials()}>Re-order memorials</button>
      {props.memorials &&
        props.memorials.map((memorial, key) => {
          return <div key={key}>{memorial.creationDate}</div>;
        })}
    </div>
  );
};

//Object.entries(obj).map(arr => arr[1])

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
