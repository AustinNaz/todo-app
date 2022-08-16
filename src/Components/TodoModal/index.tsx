import * as React from "react";

import {
  Button,
  Dialog,
  DialogProps,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { v4 as uuidV4 } from "uuid";
import { useForm, SubmitHandler, DefaultValues } from "react-hook-form";
import dayjs from "dayjs";

import { CheckBox, TextField, Dropdown, DateTimePicker } from "Components/Form";
import { CreateTodo, Todo, SelectItems } from "Types";
import { useTodoState } from "Hooks/useGlobalState";

type Props = {
  setClose: () => void;
} & DialogProps;

const TodoModal: React.FC<Props> = ({ setClose, ...dialogProps }) => {
  const { addTodo, sendTodo } = useTodoState();

  const defaultValues: DefaultValues<CreateTodo> = {
    todoName: "",
    receiver: "",
    started: false,
    priority: "Normal",
    dueBy: new Date(),
  };

  const { handleSubmit, control } = useForm<CreateTodo>({ defaultValues });

  const onSubmit: SubmitHandler<CreateTodo> = async (todo) => {
    const dueBy = dayjs(todo.dueBy).toDate();

    const newTodo: Todo = {
      id: uuidV4(),
      todoName: todo.todoName,
      status: {
        notStarted: {
          date: todo.started ? undefined : new Date(),
        },
        started: {
          date: todo.started ? new Date() : undefined,
        },
      },
      priority: todo.priority,
      dueBy,
    };

    console.log({ newTodo });
    if (todo.receiver) await sendTodo(newTodo, todo.receiver);
    else await addTodo(newTodo);
  };

  const styles = {
    closeIcon: {
      float: "right",
    },
    submitButton: {
      // height: "20%",
    },
  };

  const priorityItems: SelectItems[] = [
    {
      value: "Normal",
    },
    {
      value: "Urgent",
    },
    {
      value: "Negligent",
    },
    {
      value: "ASAP",
    },
  ];

  return (
    <Dialog {...dialogProps} onClose={setClose}>
      <DialogTitle>
        <IconButton sx={styles.closeIcon} onClick={setClose}>
          <Close />
        </IconButton>
        <Typography variant="h3">Create Todo</Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={0.5}
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <TextField fieldName="todoName" label="New Todo" control={control} />
          <TextField
            fieldName="receiver"
            label="Send to user"
            control={control}
          />
          <CheckBox
            fieldName="started"
            label="Started?"
            control={control}
            labelPlacement={"start"}
          />
          <Dropdown
            fieldName="priority"
            control={control}
            label="Priority"
            selectItems={priorityItems}
          />
          <DateTimePicker fieldName="dueBy" control={control} label="Due By" />
          <Button sx={styles.submitButton} variant="outlined" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Dialog>
  );
};

export default TodoModal;
