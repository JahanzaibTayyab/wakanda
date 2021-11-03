import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  chakra,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  useColorModeValue,
  Flex,
  Divider,
  VisuallyHidden,
  InputRightElement,
} from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { Logo } from "../../components/controls/Logo";
import Link from "../../components/controls/Link";
import Card from "../../components/controls/Card";
import Banner from "./Banner";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleClick = () => setShow(!show);

  const handleSingUpLink = () => {};

  const handleChange = (e) => {
    e.preventDefault();
    const key = e.target.name;
    if (key === "email") {
      setEmail(e.target.value);
      setEmailError("");
    }
    if (key === "password") {
      setPassword(e.target.value);
      setPasswordError("");
    }
  };
  const handleSignInClick = () => {};

  const handleGoogleClick = () => {};

  const handleFaceBookClick = () => {};

  const handleCloseIcon = () => {};

  const handleResendEmailClick = () => {};

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
            Sign in to your account
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="small">
            <Text as="span">Don&apos;t have an account?</Text>
            <Link href="#" fontWeight="bold" onClick={handleSingUpLink}>
              Sign up here
            </Link>
          </Text>
          <Card>
            <chakra.form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Stack spacing="6">
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name="email"
                    value={email}
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <Flex justify="space-between">
                    <FormLabel>Password</FormLabel>
                    <Link fontWeight="bold">Forgot Password?</Link>
                  </Flex>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      name="password"
                      value={password}
                      type={show ? "text" : "password"}
                      required
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  fontSize="md"
                  onClick={handleSignInClick}
                >
                  Sign in
                </Button>
              </Stack>
            </chakra.form>
            <Flex align="center" color="gray.300" mt="6">
              <Box flex="1">
                <Divider borderColor="currentcolor" />
              </Box>
              <Text
                as="span"
                px="3"
                fontStyle="italic"
                color={useColorModeValue("gray.500", "gray.300")}
                fontWeight="medium"
              >
                or continue with
              </Text>
              <Box flex="1">
                <Divider borderColor="currentcolor" />
              </Box>
            </Flex>
            <SimpleGrid mt="12" columns={2} spacing="2">
              <Button
                color="currentColor"
                variant="outline"
                onClick={handleFaceBookClick}
              >
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <AiFillFacebook size={22} />
              </Button>
              <Button
                color="currentColor"
                variant="outline"
                onClick={handleGoogleClick}
              >
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
              </Button>
            </SimpleGrid>
          </Card>
        </Box>
      </Box>
      {showBanner && (
        <Banner
          email={email}
          handleCloseIcon={handleCloseIcon}
          handleResendEmailClick={handleResendEmailClick}
          {...props}
        />
      )}
    </>
  );
};

export default Login;
