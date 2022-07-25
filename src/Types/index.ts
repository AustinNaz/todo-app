enum status {
  notStarted = 'notStarted',
  started = "started",
  inProgress = "inProgress",
  finished = "finished",
  onHold = "onHold",
  cancelled = "cancelled",
}

export type CreateTodo = {
  todoName: string
  started?: boolean
}

export type Todo = {
  todoName: string;
  status: {
    [keyof in status]?: {
      date?: Date
    };
  };
  priority: "Normal" | "Urgent" | "Negligent" | "ASAP";
  dueBy?: Date
  addedBy?: string
  pending?: boolean
};

export type Auth = {
  isSignedIn: boolean
  idToken?: string
}

export type SignInFields = {
  email: string
  password: string
}

export type SignUpFields = {
  secondPassword: string
} & SignInFields

export type VerificationFields = {
  code: string
}
