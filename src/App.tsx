import * as React from "react";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";

import { TextField } from "Components/Form";
import { Todo } from "Types";
import "./App.css";

function App() {
  const todoValues: DefaultValues<Todo> = {
    todoName: "",
  };

  const [todoState, setTodoState] = React.useState<Todo>({ todoName: "" });

  React.useEffect(() => {
    console.log({ todoState });
  }, [todoState]);
  const { handleSubmit, control } = useForm<Todo>({
    defaultValues: todoValues,
  });
  const onSubmit: SubmitHandler<Todo> = (data) => setTodoState(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="todoName" control={control} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
