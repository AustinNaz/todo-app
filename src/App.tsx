import * as React from "react";
import { Stack, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

import TodoComponent from "Components/Todo";
import ResponsiveAppBar from "Components/AppBar";
import { useTodoState, useAuthState } from "Hooks/useGlobalState";
import TodoModal from "Components/TodoModal";
import TodoDisplay from "Components/TodoDisplay";
import "./App.css";

function App() {
  const { todoState } = useTodoState();
  const { checkIfSignedIn } = useAuthState();
  const [open, setOpen] = React.useState<boolean>(false);

  // Cant figure out how to get rid of eslint dep issue
  React.useEffect(() => {
    checkIfSignedIn();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const styles = {
    fab: {
      position: "fixed",
      bottom: "1em",
      right: "1em",
    },
  };
  return (
    <div className="App">
      <ResponsiveAppBar />
      <TodoDisplay />
      {/* <Stack spacing={2}>
        {todoState.length
          ? todoState.map((todo, i) => (
              <TodoComponent key={todo.todoName + i} todo={todo} index={i} />
            ))
          : null}
      </Stack> */}
      {/* <Fab
        sx={styles.fab}
        color="primary"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab> */}
      <TodoModal
        open={open}
        setClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth={"xs"}
      />
    </div>
  );
}

export default App;
