import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import "../style/main.scss";
import Home from "./Home";

const Main = (props) => {
  return (
    <div className="main">
      <div>
        <Redirect to="/home" />
        <Route exact path="/home" component={Home} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
