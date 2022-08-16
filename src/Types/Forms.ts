import {
  GridProps,
  TextFieldProps,
  CheckboxProps,
  SelectProps,
} from "@mui/material";
import { DateTimePickerProps } from "@mui/x-date-pickers";
import { Control, ControllerProps } from "react-hook-form";

type FormOptions = {
  fieldName: string;
  label: string;
  control: Control<any, any>;
  controllerProps?: ControllerProps;
};

type GridOptions = {
  disableGrid?: Boolean;
  disableSpacer?: Boolean;
  gridProps?: GridProps;
  spacerProps?: GridProps;
};

type FormProps = FormOptions & GridOptions;

export type FormTextFieldProps = FormProps & TextFieldProps;

export type FormCheckboxProps = {
  labelPlacement?: "end" | "start" | "top" | "bottom";
} & FormProps &
  CheckboxProps;

export type SelectItems = {
  value: string;
  name?: string;
};

export type FormDropdownProps = { selectItems: SelectItems[] } & FormProps &
  SelectProps;

export type FormDateTimeProps = { textFieldProps?: TextFieldProps } & FormProps &
  Omit<DateTimePickerProps<any, any>, 'onChange'|'value'|'renderInput'>;

export type Auth = {
  isSignedIn: boolean;
  idToken?: string;
};

export type SignInFields = {
  email: string;
  password: string;
};

export type SignUpFields = {
  secondPassword: string;
} & SignInFields;

export type VerificationFields = {
  code: string;
};

export interface GridWrapper<T> {
  Component: any;
  key: string;
  props: T;
  disableGrid?: Boolean;
  disableSpacer?: Boolean;
  gridProps?: GridProps;
  spacerProps?: GridProps;
}
