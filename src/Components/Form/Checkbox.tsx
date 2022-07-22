import * as React from "react";

import { Controller, ControllerProps, Control } from "react-hook-form";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";

type Props = {
  fieldName: string;
  label: string;
  control: Control<any, any>;
  controllerProps?: ControllerProps;
  CheckboxProps?: CheckboxProps;
  labelPlacement?: "end" | "start" | "top" | "bottom"
};

const styles = {
  textField: {
    margin: "0.5rem",
  },
};

const CheckBox: React.FC<Props> = ({
  fieldName,
  control,
  label,
  CheckboxProps,
  controllerProps,
  labelPlacement,
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <FormControlLabel
          label={label}
          labelPlacement={labelPlacement}
          control={
            <Checkbox sx={styles.textField} {...CheckboxProps} {...field} />
          }
        />
      )}
      control={control}
    />
  );
};

export default CheckBox;
