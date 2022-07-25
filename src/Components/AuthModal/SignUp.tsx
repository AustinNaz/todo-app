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

  const signUpUser = async (email: string, password: string) => {
    try {
      await signUpWithEmail(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    console.log({ formState });
    if (!formState || !formState.email || !formState.password) return;
    if (formState.password !== formState.secondPassword) return;

    signUpUser(formState.email, formState.password);
  }, [formState]);

  return <SignUpForm setState={setFormState} />;
};

export default SignUp;
