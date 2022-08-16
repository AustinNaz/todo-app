import * as React from "react";

import { Controller } from "react-hook-form";
import { DateTimePicker as DateAndTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TextField } from "@mui/material";

import gridWrapper from "Utils/GridWrapper";
import { FormDateTimeProps } from "Types";

const FormDateTimePicker: React.FC<FormDateTimeProps> = ({
  fieldName,
  label,
  control,
  controllerProps,
  textFieldProps,
  ...dateFieldProps
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <DateAndTimePicker
          {...dateFieldProps}
          renderInput={(props) => <TextField {...props} />}
          label={label}
          {...field}
        />
      )}
      control={control}
    />
  );
};

export const DateTimePicker = ({
  disableGrid,
  disableSpacer,
  gridProps,
  spacerProps,
  ...props
}: FormDateTimeProps) => {
  return gridWrapper<FormDateTimeProps>({
    disableGrid,
    disableSpacer,
    Component: FormDateTimePicker,
    props,
    gridProps,
    spacerProps,
    key: props.fieldName,
  });
};

export default DateTimePicker;
