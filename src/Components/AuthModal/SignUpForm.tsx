import * as React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { TextField } from "Components/Form";
import { SignUpFields } from "Types";

type Props = {
  setState: React.Dispatch<React.SetStateAction<SignUpFields | undefined>>;
};

const SignUpForm: React.FC<Props> = ({ setState }) => {
  const { handleSubmit, control } = useForm<SignUpFields>();
  const onSubmit: SubmitHandler<SignUpFields> = (data) => setState(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField fieldName="email" label="Email" control={control} />
      <TextField fieldName="password" label="Password" control={control} />
      <TextField
        fieldName="secondPassword"
        label="Re-Enter Password"
        control={control}
      />
      <input type="submit" />
    </form>
  );
};

export default SignUpForm;
