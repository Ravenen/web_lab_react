import { Box, Button } from "@material-ui/core";
import useLocalStorage from "@rehooks/local-storage";
import React from "react";
import { loginKeyName } from "../../utils/Utils";

const SignUp = () => {
  const [email, setEmail, deleteEmail] = useLocalStorage(loginKeyName);

  const handleSignUp = () => {
    setEmail("test@gmail.com");
  };

  return (
    <Box pt={15} display="flex">
      <Box mx="auto">
        <Button onClick={handleSignUp}>Sign Up</Button>
      </Box>
    </Box>
  );
};

export default SignUp;
