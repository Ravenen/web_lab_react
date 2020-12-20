import { Box, Typography } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import GoBack from "../../components/GoBack/GoBack";
import { links } from "../../utils/Utils";
import * as Yup from "yup";

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
  return (
    <Box mx={20} pt={15}>
      <GoBack to={links.cart} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3">Checkout</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        ></Formik>
      </Box>
    </Box>
  );
};

export default Checkout;
