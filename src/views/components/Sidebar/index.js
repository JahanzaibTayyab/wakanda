import React from "react";
import {
  Box,
  Flex,
  Stack,
  Divider,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { Logo } from "../controls/DashboardLogo";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavBreadcrumb } from "./NavBreadcrumb";
import { NavSectionTitle } from "./NavSectionTitle";
import { ScrollArea } from "./ScrollArea";
import { SidebarLink } from "./SidebarLink";
import { useMobileMenuState } from "./useMobileMenuState";
import { UserInfo } from "./UserInfo";
import DashboardContent from "../dashborad";

const SideBar = (props) => {
  const { isOpen, toggle } = useMobileMenuState();
  const { match } = props;
  return (
    <Flex
      height="100vh"
      bg={mode("gray.800", "gray.400")}
      overflow="hidden"
      sx={{
        "--sidebar-width": "16rem",
      }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <Box
            as="a"
            href="#"
            p="3"
            display="block"
            transition="background 0.1s"
            rounded="xl"
            _hover={{
              bg: "whiteAlpha.200",
            }}
            whiteSpace="nowrap"
          >
            <Logo />
            <UserInfo
              name="Segun Adebayo"
              email="segun@chakra-ui.com"
              image="https://bit.ly/sage-adebayo"
            />
          </Box>
          <ScrollArea pt="5" pb="6">
            <Stack pb="6">
              <NavSectionTitle>Widgets</NavSectionTitle>
              <SidebarLink icon={<FaReact />}>Espresso</SidebarLink>
              <SidebarLink
                icon={<FaReact />}
                showComingSoon
                href={match.url + "#"}
              >
                Latte
              </SidebarLink>
              <SidebarLink
                icon={<FaReact />}
                showComingSoon
                href={match.url + "#"}
              >
                Flat white
              </SidebarLink>
              <SidebarLink
                icon={<FaReact />}
                showComingSoon
                href={match.url + "#"}
              >
                Machiatto
              </SidebarLink>
            </Stack>
          </ScrollArea>
        </Box>
        <Box position="fixed" bottom="10px" lineHeight="tall" width="19%">
          <Divider mb="5" ml={-5} />
          <Stack pb="6">
            <SidebarLink icon={<FaReact />}>Support</SidebarLink>
            <SidebarLink icon={<FaReact />}>Logout</SidebarLink>
          </Stack>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{
          base: "0",
          md: "0",
        }}
        marginStart={{
          md: "var(--sidebar-width)",
        }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transition="left 0.2s"
      >
        <Box
          bg={mode("white", "gray.700")}
          height="100%"
          pb="6"
          rounded={{
            md: "lg",
          }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb />
              </Flex>
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
              <DashboardContent title="Espresso" refreshIcon={<FaReact />} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
export default SideBar;
