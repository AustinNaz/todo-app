import * as React from "react";

import { Controller, ControllerProps, Control } from "react-hook-form";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";

type Props = {
  name: string;
  control: Control<any, any>;
  controllerProps?: ControllerProps;
  textFieldProps?: TextFieldProps;
};

const TextField: React.FC<Props> = ({
  name,
  control,
  textFieldProps,
  controllerProps,
}) => {
  return (
    <Controller
      name={name}
      {...controllerProps}
      render={({ field }) => (
        <MUITextField
          label={name}
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
