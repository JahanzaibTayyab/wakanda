import React from "react";
import { Box, Heading, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import { Logo } from "../../components/controls/Logo";
import { OnBoardingSteps } from "./OnBoardingSteps/OnBoardingSteps";
import { notionOAuthToken } from "../../../store/actions/NotionAuth";
import {
  generatePinCode,
  generateUniqueUrl,
} from "../../../store/actions/Preparing";

const Preparing = (props) => {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "inherit")}
        minH="100vh"
        py="12"
        px={{
          base: "4",
          lg: "8",
        }}
      >
        <Box maxW="md" mx="auto">
          <Logo
            mx="auto"
            h="8"
            mb={{
              base: "10",
              md: "20",
            }}
          />
          <Heading textAlign="center" size="xl" fontWeight="extrabold">
            Preparing your productivity boost
          </Heading>
          <Text
            mt="4"
            mb="8"
            align="center"
            maxW="md"
            fontWeight="400"
            fontSize="18px"
          >
            Just a minute and it’ll be ready...
          </Text>

          <Flex justify="center" mb="2">
            <OnBoardingSteps {...props} />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = ({ NotionAuth, Dashboard }) => {
  return {
    loading: NotionAuth?.loading,
    redirectedUrl: NotionAuth?.oauthUrl?.redirectUrl,
    response: NotionAuth?.response,
    error: NotionAuth?.error,
    uniqueLinkGenerated: Dashboard?.uniqueLinkGenerated,
    pinCodeGenerated: Dashboard?.pinCodeGenerated,
    dashboardError: Dashboard?.error,
    dashboardResponse: Dashboard?.response,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preparing);
