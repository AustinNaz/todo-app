import * as React from "react";

import { Card, CardContent, Typography } from "@mui/material";
import { Todo } from "Types";

type Props = { todo: Todo };

const TodoComponent: React.FC<Props> = ({ todo: { todoName } }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{todoName}</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoComponent;
