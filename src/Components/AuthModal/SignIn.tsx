import * as React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { TextField } from "Components/Form";
// import { useCognito } from 'Hooks'
import { SignInFields } from "Types";

type Props = {
  setClose: () => void;
};

const SignIn: React.FC<Props> = ({ setClose }) => {
  const { handleSubmit, control } = useForm<SignInFields>();
  // const { signIn } = useCognito()

  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    try {
      // const res = await signIn(data.email, data.password)
      // console.log({ res })
      setClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField fieldName="email" label="Email" control={control} />
      <TextField fieldName="password" label="Password" control={control} />
      <input type="submit" />
    </form>
  );
};

export default SignIn;
