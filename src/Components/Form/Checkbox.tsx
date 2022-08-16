import * as React from "react";

import { Controller } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

import gridWrapper from "Utils/GridWrapper";
import { FormCheckboxProps } from "Types";

const FormCheckBox: React.FC<FormCheckboxProps> = ({
  fieldName,
  control,
  label,
  controllerProps,
  labelPlacement,
  ...checkboxProps
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          control={<Checkbox {...checkboxProps} {...field} />}
        />
      )}
      control={control}
    />
  );
};

export const CheckBox = ({
  disableGrid,
  disableSpacer,
  gridProps,
  spacerProps,
  ...props
}: FormCheckboxProps) => {
  return gridWrapper<FormCheckboxProps>({
    disableGrid,
    disableSpacer,
    Component: FormCheckBox,
    props,
    gridProps,
    spacerProps,
    key: props.fieldName
  })
}


export default CheckBox;
