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
  dueBy?: Date
  addedBy?: string
};

export type Auth = {
  isSignedIn: boolean
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
