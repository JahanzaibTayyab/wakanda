import React from "react";
import { connect } from "react-redux";
import Espresso from "./Espresso";

const EspressoContainer = (props) => {
  return <Espresso {...props} />;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(EspressoContainer);
