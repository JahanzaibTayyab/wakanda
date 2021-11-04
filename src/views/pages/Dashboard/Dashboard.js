import React from "react";
import { connect } from "react-redux";
import { Flex, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

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
