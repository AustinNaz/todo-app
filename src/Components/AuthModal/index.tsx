import * as React from "react";

import {
  Grid,
  Dialog,
  DialogProps,
  DialogTitle,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";

import TabPanel from "Components/TabPanel";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Close } from "@mui/icons-material";

type Props = {
  setClose: () => void;
} & DialogProps;
type State = "SignUp" | "SignIn";

const SignInUp: React.FC<Props> = ({ setClose, ...dialogProps }) => {
  const [state, setState] = React.useState<State>("SignUp");
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    setState(newValue === 0 ? "SignUp" : "SignIn");
  };

  const styles = {
    closeIcon: {
      float: "right",
    },
  };

  return (
    <Dialog {...dialogProps} onClose={setClose}>
      <DialogTitle>
        <IconButton sx={styles.closeIcon} onClick={setClose}>
          <Close />
        </IconButton>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Sign Up" />
          <Tab label="Sign In" />
        </Tabs>
        <Typography variant="h3">{state}</Typography>
      </DialogTitle>
      <Grid container>
        <TabPanel value={value} index={0}>
          <SignUp setClose={setClose} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignIn setClose={setClose} />
        </TabPanel>
      </Grid>
    </Dialog>
  );
};

export default SignInUp;
