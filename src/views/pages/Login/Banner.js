import React from "react";
import { InfoIcon, CloseIcon } from "@chakra-ui/icons";
import { FiX } from "react-icons/fi";
import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
const Banner = (props) => {
  const { email, handleCloseIcon, handleResendEmailClick } = props;
  return (
    <Box as="section">
      <Stack
        direction={{ base: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        py="3"
        px={{ base: "3", md: "6", lg: "8" }}
        color="white"
        bg={useColorModeValue("blue.600", "blue.400")}
      >
        <HStack spacing="2">
          <Icon as={InfoIcon} fontSize="2xl" h="10" />
          <Text fontWeight="medium" marginEnd="2">
            Confirm your email. Check your email. We&apos;ve send a message to{" "}
            <b>{email}</b>
          </Text>
        </HStack>
        <HStack spacing="4">
          <Button
            isFullWidth
            color="white"
            size="sm"
            fontWeight="normal"
            color="blue.500"
            fontSize="xs"
            onClick={handleResendEmailClick}
          >
            Resend email
          </Button>
        </HStack>
        <FiX size={22} onClick={handleCloseIcon} />
      </Stack>
    </Box>
  );
};

export default Banner;
