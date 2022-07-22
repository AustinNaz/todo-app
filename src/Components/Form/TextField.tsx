import * as React from "react";

import { Controller, ControllerProps, Control } from "react-hook-form";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";

type Props = {
  fieldName: string;
  label: string
  control: Control<any, any>;
  controllerProps?: ControllerProps;
  textFieldProps?: TextFieldProps;
};

const styles = {
  textField: {
    margin: "0.5rem",
  },
};

const TextField: React.FC<Props> = ({
  fieldName,
  label,
  control,
  textFieldProps,
  controllerProps,
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <MUITextField
          sx={styles.textField}
          label={label}
          variant="outlined"
          {...textFieldProps}
          {...field}
        />
      )}
      control={control}
    />
  );
};

export default TextField;
