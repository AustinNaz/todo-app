import * as React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { TextField } from "Components/Form";
import { SignUpFields } from "Types";
import { Grid } from "@mui/material";

type Props = {
  setState: React.Dispatch<React.SetStateAction<SignUpFields | undefined>>;
};

const SignUpForm: React.FC<Props> = ({ setState }) => {
  const { handleSubmit, control } = useForm<SignUpFields>();
  const onSubmit: SubmitHandler<SignUpFields> = (data) => setState(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        spacing={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        container
      >
        <TextField fieldName="email" label="Email" control={control} />
        <TextField
          fieldName="password"
          label="Password"
          type="password"
          control={control}
        />
        <TextField
          fieldName="secondPassword"
          label="Re-Enter Password"
          type="password"
          control={control}
        />
        <input type="submit" />
      </Grid>
    </form>
  );
};

export default SignUpForm;
