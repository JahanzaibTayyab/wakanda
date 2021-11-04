import React from "react";
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar";

export const Dashboard = (props) => {
  return (
    <>
      <Sidebar {...props} />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
