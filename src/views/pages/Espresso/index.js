import React, {useEffect} from "react";
import { connect } from "react-redux";
import Espresso from "./Espresso";
import { notionOAuthToken } from "../../../store/actions/NotionAuth";
import { getProfile } from "../../../store/actions/Profile";
import {
  generatePinCode,
  generateUniqueUrl,
  findDataBase,
  findPage,
  embededPinCode,
} from "../../../store/actions/Dashboard";
import { databases, pages } from "../../../constants/_data/Mockup";
const EspressoContainer = (props) => {
  return <Espresso {...props} />;
};

const mapStateToProps = ({ NotionAuth, Dashboard, Profile }) => {
  return {
    loading: NotionAuth?.loading,
    redirectedUrl: NotionAuth?.oauthUrl?.redirectUrl,
    response: NotionAuth?.response,
    error: NotionAuth?.error,
    uniqueLinkGenerated: Dashboard?.uniqueLinkGenerated,
    pinCodeGenerated: Dashboard?.pinCodeGenerated,
    dashboardError: Dashboard?.error,
    dashboardResponse: Dashboard?.response,
   // databases: Dashboard?.databases,
    databases: databases,
    //pages: Dashboard?.pages,
    pages: pages,
    user: Profile?.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notionOAuthToken: (userData) => {
      dispatch(notionOAuthToken(userData));
    },
    generateUniqueUrl: (data) => {
      dispatch(generateUniqueUrl(data));
    },
    generatePinCode: (userData) => {
      dispatch(generatePinCode(userData));
    },
    findDataBase: (data) => {
      dispatch(findDataBase(data));
    },
    findPage: (userData) => {
      dispatch(findPage(userData));
    },
    getProfile: (data) => {
      dispatch(getProfile(data));
    },
    embededPinCode: (data) => {
      dispatch(embededPinCode(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EspressoContainer);
