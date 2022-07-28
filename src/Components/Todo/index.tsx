import * as React from "react";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { TextField } from "Components/Form";
import { Todo } from "Types";
import { useTodoState } from "Hooks/useGlobalState";

type Props = { todo: Todo; index: number };

const TodoComponent: React.FC<Props> = ({ todo, index }) => {
  const { editTodo, deleteTodo } = useTodoState();
  const [edit, setEdit] = React.useState<boolean>(false);

  const defaultValues: DefaultValues<Todo> = {
    todoName: todo.todoName,
  };
  const { handleSubmit, control } = useForm<Todo>({ defaultValues });
  const onSubmit: SubmitHandler<Todo> = (newValues) =>
    editTodo(todo, newValues, index);

  return (
    <Card>
      <CardContent>
        {edit ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fieldName="todoName"
              label="Edit Todo"
              control={control}
            />
            <input type="submit" />
          </form>
        ) : (
          <Typography>{todo.todoName}</Typography>
        )}
        <IconButton onClick={() => setEdit(true)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id, index)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoComponent;
