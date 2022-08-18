import * as React from "react";

import { SxProps, Box, Container, Grid } from "@mui/material";

type Props = {};

const TodoDisplay: React.FC<Props> = ({}) => {
  const styles = {
    container: {
      width: "100%",
      height: "100vh",
    },
    time: {
      height: '100%'
    },
    grid: {
      height: "100%",
    },
    asap: {
      height: "inherit",
      width: "100%",
    },
    urgent: {
      height: "inherit",
      width: "100%",
    },
    normal: {
      height: "inherit",
      width: "100%",
    },
    negligent: {
      height: "inherit",
      width: "100%",
    },
  };

  return (
    // <div style={styles.container}>
    //   <div style={styles.asap}></div>
    //   <div style={styles.urgent}></div>
    //   <div style={styles.normal}></div>
    //   <div style={styles.negligent}></div>
    // </div>
    <Container maxWidth='xl' sx={styles.container}>
      <Grid container sx={styles.grid}>
        <Grid item sx={styles.time} xs={1}></Grid>
        <Grid item sx={styles.asap} xs={2.75}></Grid>
        <Grid item sx={styles.urgent} xs={2.75}></Grid>
        <Grid item sx={styles.normal} xs={2.75}></Grid>
        <Grid item sx={styles.negligent} xs={2.75}></Grid>
      </Grid>
    </Container>
  );
};

export default TodoDisplay;
