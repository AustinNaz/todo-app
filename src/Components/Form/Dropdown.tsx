import * as React from "react";

import { Controller } from "react-hook-form";
import { InputLabel, MenuItem, Select } from "@mui/material";

import gridWrapper from "Utils/GridWrapper";
import { FormDropdownProps } from "Types";

const FormDropdown: React.FC<FormDropdownProps> = ({
  fieldName,
  label,
  control,
  controllerProps,
  selectItems,
  ...selectProps
}) => {
  return (
    <Controller
      name={fieldName}
      {...controllerProps}
      render={({ field }) => (
        <>
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...selectProps} {...field}>
            {selectItems.map((item, index) => (
              <MenuItem key={`${item.value}-${index}`} value={item.value}>
                {item.name || item.value}
              </MenuItem>
            ))}
          </Select>
        </>
      )}
      control={control}
    />
  );
};

export const Dropdown = ({
  disableGrid,
  disableSpacer,
  gridProps,
  spacerProps,
  ...props
}: FormDropdownProps) => {
  return gridWrapper<FormDropdownProps>({
    disableGrid,
    disableSpacer,
    Component: FormDropdown,
    props,
    gridProps,
    spacerProps,
    key: props.fieldName,
  });
};

export default Dropdown;
