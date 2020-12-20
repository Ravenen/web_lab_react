import { Box, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import ColoredButton from "../../components/ColoredButton/ColoredButton";
import CustomInputField from "../../components/CustomInputField/CustomInputField";
import GoBack from "../../components/GoBack/GoBack";
import { links } from "../../utils/Utils";

const initialValues = {
  firstName: "",
  lastName: "",
  age: 0,
  email: "",
  phoneNumber: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("This field is required")
    .min(2, "Should have at least 2 characters")
    .max(100, "Should not be longer than 100 characters"),
  lastName: Yup.string()
    .required("This field is required")
    .min(2, "Should have at least 2 characters")
    .max(100, "Should not be longer than 100 characters"),
  age: Yup.number()
    .required("This field is required")
    .positive("Age is not valid")
    .min(18, "You should be 18 years old"),
  email: Yup.string()
    .required("This field is required")
    .email("Email is not valid"),
  phoneNumber: Yup.string().matches(/\+[0-9]{12}/, {
    message: "Phone number is not valid",
    excludeEmptyString: true,
  }),
});

const Checkout = () => {
  const history = useHistory();
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      history.push(`/${links.success}`);
    }, 3000);
  };
  return (
    <Box mx={20} pt={15}>
      <GoBack />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">Checkout</Typography>
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
              <Box display="flex" justifyContent="space-between" mt={5}>
                <Box mr={4}>
                  <CustomInputField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    type="text"
                    required
                  />
                </Box>
                <Box ml={4}>
                  <CustomInputField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    type="text"
                    required
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={5}>
                <Box mr={4}>
                  <CustomInputField
                    id="age"
                    name="age"
                    label="Age"
                    type="number"
                    required
                  />
                </Box>
                <Box ml={4}>
                  <CustomInputField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    required
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={5}>
                <Box>
                  <CustomInputField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone number"
                    type="tel"
                    helperText="(optional)"
                  />
                </Box>
              </Box>
              <Box mt={5}>
                <ColoredButton
                  color="success"
                  disabled={isSubmitting}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </ColoredButton>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
