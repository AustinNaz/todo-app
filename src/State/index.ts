import { atom } from "recoil";
import { Todo } from "Types";

export const todoState = atom<Todo[]>({
  key: "todos",
  default: [],
});
