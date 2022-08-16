import * as React from "react";

import SignUpForm from "./SignUpForm";
import { useAuthState } from "Hooks/useGlobalState";
import { SignUpFields } from "Types";

type Props = {
  setClose: () => void;
};

const SignUp: React.FC<Props> = ({ setClose }) => {
  const [formState, setFormState] = React.useState<SignUpFields>();
  const { signUpWithEmail } = useAuthState();

  React.useEffect(() => {
    console.log({ formState });
    if (!formState || !formState.email || !formState.password) return;
    if (formState.password !== formState.secondPassword) return;

    signUpWithEmail(formState.email, formState.password);
  }, [formState, signUpWithEmail]);

  return <SignUpForm setState={setFormState} />;
};

export default SignUp;
