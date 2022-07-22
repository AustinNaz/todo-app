import * as React from "react";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import { Stack, Button } from "@mui/material";

import TodoComponent from "Components/Todo";
import { TextField, CheckBox } from "Components/Form";
import ResponsiveAppBar from "Components/AppBar";
import { useTodoState } from "Hooks/useGlobalState";
import { CreateTodo, Todo } from "Types";
import "./App.css";

function App() {
  const { todoState, addTodo } = useTodoState();

  const defaultValues: DefaultValues<CreateTodo> = {
    todoName: "",
    started: false,
  };
  const { handleSubmit, control } = useForm<CreateTodo>({ defaultValues });
  const onSubmit: SubmitHandler<CreateTodo> = (todo) => {
    const newTodo: Todo = {
      todoName: todo.todoName,
      status: {
        notStarted: {
          date: todo.started ? undefined : new Date(),
        },
        started: {
          date: todo.started ? new Date() : undefined,
        },
      },
    };

    console.log({ newTodo });
  };

  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      height: "20%",
    },
  };
  return (
    <div className="App">
      <ResponsiveAppBar />
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField fieldName="todoName" label="New Todo" control={control} />
        <CheckBox
          fieldName="started"
          label="Started?"
          control={control}
          labelPlacement={"start"}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>

      <Stack spacing={2}>
        {todoState.length
          ? todoState.map((todo, i) => (
              <TodoComponent key={todo.todoName + i} todo={todo} index={i} />
            ))
          : null}
      </Stack>
    </div>
  );
}

export default App;
