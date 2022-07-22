import * as React from "react";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import { Stack } from "@mui/material";

import TodoComponent from "Components/Todo";
import { TextField } from "Components/Form";
import { useTodoState } from "Hooks/useGlobalState";
import { Todo } from "Types";
import "./App.css";

function App() {
  const { todoState, addTodo } = useTodoState();

  const defaultValues: DefaultValues<Todo> = {
    todoName: "",
  };
  const { handleSubmit, control } = useForm<Todo>({ defaultValues });
  const onSubmit: SubmitHandler<Todo> = (todo) => addTodo(todo);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="todoName" control={control} />
        <input type="submit" />
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
