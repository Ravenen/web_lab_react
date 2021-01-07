import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

const CustomInputField = ({ id, name, ...props }) => {
  const [field, meta] = useField(name);
  const isError = !!(meta.touched && meta.error);
  const errorText = isError ? meta.error : "";
  return (
    <TextField
      id={id}
      name={name}
      {...field}
      {...props}
      error={isError}
      helperText={errorText || props.helperText}
      variant={props.variant || "outlined"}
    />
  );
};

export default CustomInputField;
