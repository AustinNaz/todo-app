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
    send: false,
    receiver: "",
    started: false,
    priority: "Normal",
    dueBy: new Date(),
  };

  const { handleSubmit, control, watch } = useForm<CreateTodo>({
    defaultValues,
  });
  const { send } = watch();

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
    setClose();
  };

  const styles = {
    closeIcon: {
      float: "right",
    },
    form: {
      margin: "1em",
    },
    submitButton: {
      marginTop: "1em",
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
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={1}
          // flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <TextField fieldName="todoName" label="New Todo" control={control} />
          <DateTimePicker fieldName="dueBy" control={control} label="Due By" />
          <Dropdown
            fieldName="priority"
            control={control}
            label="Priority"
            selectItems={priorityItems}
          />
          <CheckBox
            fieldName="started"
            label="Started?"
            control={control}
            labelPlacement="top"
            gridProps={{ xs: 3 }}
            disableSpacer
          />
          <CheckBox
            fieldName="send"
            label="Send todo to another User?"
            control={control}
            labelPlacement="top"
            gridProps={{ xs: 7 }}
            disableSpacer
          />
          {send ? (
            <TextField
              fieldName="receiver"
              label="Enter Recipients Email"
              control={control}
            />
          ) : null}
          <Button sx={styles.submitButton} variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Dialog>
  );
};

export default TodoModal;
