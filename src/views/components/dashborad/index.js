import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Divider,
  Button,
  Switch,
  FormLabel,
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
import RefreshLink from "./RefreshLink";
import "./dashboard.css";
const DashboardContent = (props) => {
  const { title } = props;

  const [enableSwitch, setEnabledSwitch] = useState(false);
  const [disabledRefreshLinkButton, setDisabledRefreshLinkButton] =
    useState(false);
  const [showRefreshModal, setShowRefreshModal] = useState(false);
  const [refreshModalButtonText, setRefreshModalButtonText] =
    useState("Refresh");
  const [disabledRefreshModalButton, setDisabledRefreshModalButton] =
    useState(false);
  const [showChangePageModal, setShowChangePageModal] = useState(false);
  const [changePagehModalButtonText, setChangePageModalButtonText] =
    useState("Change Page");
  const [disabledChangePageModalButton, setDisabledChangePageModalButton] =
    useState(false);
  const [showEmbedNotionModal, setShowEmbedNotionModal] = useState(false);
  const [embedNotionModalButtonText, setEmbedNotionModalButtonText] =
    useState("Embed");
  const [disabledEmbedNotionModalButton, setDisabledEmbedNotionModalButton] =
    useState(false);
  const [showChangeDatabaseModal, setShowChangeDatabaseModal] = useState(false);
  const [changeDatabaseModalButtonText, setChangeDatabaseModalButtonText] =
    useState("Change Database");
  const [
    disabledChangeDatabaseModalButton,
    setDisabledChangeDatabaseModalButton,
  ] = useState(false);

  const handleRefreshLinkClick = () => {
    setShowRefreshModal(true);
    setDisabledRefreshLinkButton(true);
  };

  const handleRefreshModalClick = () => {
    setRefreshModalButtonText("Refreshing...");
    setDisabledRefreshModalButton(true);
  };

  const handleRefreshCancelModalClick = () => {
    setShowRefreshModal(false);
    setDisabledRefreshModalButton(false);
  };

  const handelSwitchClick = (e) => {
    console.log(e.traget.value);
  };

  return (
    <>
      <Heading size="md" fontWeight="bold" mb={6}>
        {title}
      </Heading>
      <Box
        flex={1}
        px={{
          base: 0,
          md: 5,
        }}
      >
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          <Box>
            <Flex justify="space-between">
              <Heading size="sm" fontWeight="bold">
                Embeddable secret link
              </Heading>
              <Box
                display={{
                  base: "block",
                  md: "none",
                }}
              >
                <GrCircleInformation color="gray.500" />
              </Box>
            </Flex>
            <Text
              mt={2}
              color="gray.500"
              fontSize="xs"
              fontWeight="500"
              display={{
                base: "none",
                md: "block",
              }}
              mr={10}
            >
              You can copy and paste this URL in Notion to embed the widget. You
              will need the 6 digit code in the Notion page to use it, this is
              to make sure you have signed in into your workspace. Even so this
              is a public URL, <a className="textYellow">keep it secret.</a>
            </Text>
          </Box>
          <Box>
            <RefreshLink
              icon={props.refreshIcon}
              disabled
              inputValue="https://app.notion.coffee/w/espresso/asdadsadsasasd"
            />
            <Flex justify="flex-end">
              <Button
                bg="yellow.500"
                textColor="white"
                isDisabled={disabledRefreshLinkButton}
                fontSize="xs"
                mt={4}
                leftIcon={props.refreshIcon}
                onClick={handleRefreshLinkClick}
              >
                Refresh Link
              </Button>
            </Flex>
            <Flex alignItems="center" justifyContent="flex-end" mt={5}>
              <Switch
                id="email-alerts"
                size="sm"
                colorScheme="yellow"
                value={enableSwitch}
                onChange={handelSwitchClick}
              />
              <Text ml={5} fontSize="xs" textAlign="center">
                Secret public link <a className="textYellow">enabled</a>
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
        <Divider
          py={4}
          mb={4}
          display={{
            base: "none",
            md: "block",
          }}
        />
      </Box>
    </>
  );
};

export default DashboardContent;
