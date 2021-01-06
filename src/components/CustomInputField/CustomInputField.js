import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React from "react";

const CustomInputField = ({ id, name, ...props }) => {
  const [field, meta] = useField(name);
  const isError = !!(meta.touched && meta.error);
  const errorText = isError ? meta.error : "";
  console.log(meta);
  return (
    <TextField
      id={id}
      name={name}
      {...field}
      {...props}
      error={isError}
      helperText={errorText || props.helperText}
      variant="outlined"
    />
  );
};

export default CustomInputField;
