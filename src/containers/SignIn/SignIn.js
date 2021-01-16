import { Box, Button, Typography } from "@material-ui/core";
import useLocalStorage from "@rehooks/local-storage";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CustomInputField from "../../components/CustomInputField/CustomInputField";
import { HoverableNavLink } from "../../components/HoverableLink/HoverableLink.styled";
import { links, loginKeyName } from "../../utils/Utils";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("This field is required")
    .email("Wrong email format")
    .min(2, "Should have at least 2 characters")
    .max(100, "Should not be longer than 100 characters"),
  password: Yup.string().required("This field is required"),
});

const SignIn = () => {
  const [email, setEmail] = useLocalStorage(loginKeyName);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    setTimeout(() => {
      setEmail(values.email);
      setSubmitting(false);
    }, 3000);
  };

  return (
    <Box display="flex" bgcolor="#dfe3eb" height="100vh" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mx="25%"
        p={10}
        width="100%"
        bgcolor="#ffffff"
        borderRadius={10}
        boxShadow={7}
      >
        <Box mb={5}>
          <Typography variant="h4">Welcome back!</Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Box
              component={Form}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box mb={4}>
                <Box
                  component={CustomInputField}
                  width={250}
                  id="email"
                  name="email"
                  label="Login / Email"
                  type="email"
                  required
                  variant="standard"
                />
              </Box>
              <Box mb={5}>
                <Box
                  component={CustomInputField}
                  width={250}
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  required
                  variant="standard"
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                disableElevation
                type="submit"
                disabled={isSubmitting}
              >
                Log In
              </Button>
            </Box>
          )}
        </Formik>
        <Box mt={1}>
          <Typography variant="caption" color="textSecondary">
            <>Still not a member? </>
            <HoverableNavLink
              to={`${links.signUp}`}
              style={{ textDecoration: "underline" }}
            >
              Join us!
            </HoverableNavLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
