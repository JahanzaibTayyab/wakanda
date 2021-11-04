import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  VStack,
  Avatar,
  HStack,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Logo } from "../../components/controls/DashboardLogo";

const LinkItems = [
  { name: "Espresso", icon: FaReact, link: "/espresso" },
  { name: "Latte", icon: FaReact, link: "/latte" },
  { name: "Flat white", icon: FaReact, link: "/flatWhite" },
  { name: "Machiatto", icon: FaReact, link: "/machiatto" },
];

export default function SimpleSidebar(props) {
  const { match } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        match={match}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} match={match} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {props.children}
      </Box>
      <Flex ml={{ base: 0, md: 270 }}>
        <Text>Dashboard</Text>
      </Flex>
    </Box>
  );
}

const SidebarContent = ({ onClose, match, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
          color="white"
        />
      </Flex>
      <Box ml="4">
        <Flex alignItems={"center"} mb="8">
          <HStack>
            <Avatar src={"https://bit.ly/sage-adebayo"} />
            <VStack
              display={{ md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
            >
              <Text fontSize="sm" color="white" fontWeight="500">
                Segun Adebayo
              </Text>
              <Text fontSize="xs" color="whiteAlpha.800">
                segun@chakra-ui.com
              </Text>
            </VStack>
          </HStack>
        </Flex>
        <Text fontSize="xs" color="whiteAlpha.800" fontWeight="500">
          Widgets
        </Text>
        {LinkItems.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            link={link.link}
            url={match.url}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
      <Flex alignItems={"center"} mb="8">
        <HStack>
          <Avatar src={"https://bit.ly/sage-adebayo"} />
          <VStack
            display={{ md: "flex" }}
            alignItems="flex-start"
            spacing="1px"
          >
            <Text fontSize="sm" color="white" fontWeight="500">
              Segun Adebayo
            </Text>
            <Text fontSize="xs" color="whiteAlpha.800">
              segun@chakra-ui.com
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, link, url, children, ...rest }) => {
  return (
    <Link href={url + link} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        textColor="white"
        fontSize="sm"
        fontWeight="500"
        cursor="pointer"
        _hover={{
          bg: "whiteAlpha.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("gray.800", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu color="white" />}
      />
      <Box ml="8">
        <Logo />
      </Box>
    </Flex>
  );
};
