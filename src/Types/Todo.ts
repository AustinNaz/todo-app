enum status {
  notStarted = "notStarted",
  started = "started",
  inProgress = "inProgress",
  finished = "finished",
  onHold = "onHold",
  cancelled = "cancelled",
}

export type CreateTodo = {
  todoName: string;
  send: boolean;
  receiver?: string;
  started?: boolean;
  dueBy: Date;
  priority: "Normal" | "Urgent" | "Negligent" | "ASAP";
};

export type Todo = {
  id: string;
  todoName: string;
  status: {
    [keyof in status]?: {
      date?: Date;
    };
  };
  priority: "Normal" | "Urgent" | "Negligent" | "ASAP";
  dueBy?: Date;
  addedBy?: string;
  pending?: boolean;
};