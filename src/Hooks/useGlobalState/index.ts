import { useRecoilState } from "recoil";
import { todoState } from "State/index";
import { Todo } from "Types";

export const useTodoState = () => {
  const [state, setState] = useRecoilState(todoState);

  const addTodo = (todo: Todo) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState.push(todo);
      return newState;
    });
  };

  return { todoState: state, addTodo };
};
