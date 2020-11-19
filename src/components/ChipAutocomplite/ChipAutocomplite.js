import { Box, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

const ChipAutocomplite = ({
  dataSource,
  label = "",
  placeholder = "",
  ...props
}) => {
  return (
    <div>
      <Box
        {...props}
        component={Autocomplete}
        multiple
        id="chip-select"
        options={dataSource}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </div>
  );
};

export default ChipAutocomplite;
