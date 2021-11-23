import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { Logo } from "../../components/controls/Logo";
import Card from "../../components/controls/Card";
import { useAuth } from "../../../contexts/AuthContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const query = useQuery();
  const [password, setPassword] = useState("");
  const toast = useToast();
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{
        base: "4",
        lg: "8",
      }}
    >
      <Logo
        mx="auto"
        h="8"
        mb={{
          base: "10",
          md: "20",
        }}
      />
      <Heading textAlign="center" my={12}>
        Reset password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await resetPassword(query.get("oobCode"), password);
              toast({
                description: "Password has been changed, you can login now.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              <Redirect to={"/login"} />;
            } catch (error) {
              toast({
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              });
            }
          }}
        >
          <Stack spacing="6">
            <FormControl id="password">
              <FormLabel>New password</FormLabel>
              <Input
                type="password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="submit"
              bg="yellow.500"
              textColor="white"
              size="lg"
              fontSize="md"
            >
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Box>
  );
}
