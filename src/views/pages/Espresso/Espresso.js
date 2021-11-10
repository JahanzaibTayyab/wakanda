import React from "react";
import { connect } from "react-redux";
import EspressoContent from "../../components/espresso";
import { FaReact } from "react-icons/fa";
export const Dashboard = (props) => {
  return (
    <>
      <EspressoContent {...props} refreshIcon={<FaReact />} />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
