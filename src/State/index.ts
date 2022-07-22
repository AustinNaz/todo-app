import { atom } from "recoil";
import { Todo, Auth } from "Types";

export const todoState = atom<Todo[]>({
  key: "todos",
  default: [],
});

export const authState = atom<Auth>({
  key: "auth",
  // See if If I can read if user is signed in here
  default: { isSignedIn: false },
});
