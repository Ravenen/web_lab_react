import { Box, Button } from "@material-ui/core";
import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import { loginKeyName } from "../../utils/Utils";

const SignIn = () => {
  const [email, setEmail, deleteEmail] = useLocalStorage(loginKeyName);

  const handleSignIn = () => {
    setEmail("test@gmail.com");
  };
  return (
    <Box pt={15} display="flex">
      <Box mx="auto">
        <Button onClick={handleSignIn}>Log In</Button>
      </Box>
    </Box>
  );
};

export default SignIn;
