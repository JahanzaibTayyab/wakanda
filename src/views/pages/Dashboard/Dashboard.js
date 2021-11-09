import React from "react";
import { connect } from "react-redux";
import DashboardContent from "../../components/dashboard";
import { FaReact } from "react-icons/fa";
export const Dashboard = (props) => {
  return (
    <>
      <DashboardContent {...props} refreshIcon={<FaReact />} />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
