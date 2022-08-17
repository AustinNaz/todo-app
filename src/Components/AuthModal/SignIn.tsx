import * as React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { TextField } from "Components/Form";
import { useAuthState } from "Hooks/useGlobalState";
import { SignInFields } from "Types";
import { Grid } from "@mui/material";

type Props = {
  setClose: () => void;
};

const SignIn: React.FC<Props> = ({ setClose }) => {
  const { handleSubmit, control } = useForm<SignInFields>();
  const { signInWithEmail } = useAuthState();

  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    try {
      await signInWithEmail(data.email, data.password);
      // const res = await signIn(data.email, data.password)
      // console.log({ res })
      setClose();
    } catch (err) {
      console.log(err);
    }
  };

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
          // textFieldProps={{ type: "password" }}
          type="password"
          control={control}
        />
        <input type="submit" />
      </Grid>
    </form>
  );
};

export default SignIn;
