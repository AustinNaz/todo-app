import * as React from "react";

import { Controller } from "react-hook-form";
import { TextField as MUITextField } from "@mui/material";

import gridWrapper from "Utils/GridWrapper";
import { FormTextFieldProps } from "Types";

const FormTextField: React.FC<FormTextFieldProps> = ({
  fieldName,
  label,
  control,
  controllerProps,
  ...textFieldProps
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <MUITextField
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

export const TextField = ({
  disableGrid,
  disableSpacer,
  gridProps,
  spacerProps,
  ...props
}: FormTextFieldProps) => {
  return gridWrapper<FormTextFieldProps>({
    disableGrid,
    disableSpacer,
    Component: FormTextField,
    props,
    gridProps,
    spacerProps,
    key: props.fieldName
  })
}

export default TextField;
