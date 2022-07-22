import { useRecoilState } from "recoil";
import { todoState } from "State/index";
import { Todo } from "Types";

export const useTodoState = () => {
  const [state, setState] = useRecoilState(todoState);

  const addTodo = (newTodo: Todo) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState.push(newTodo);
      return newState;
    });
  };

  const editTodo = (newTodo: Todo, index: number) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState[index].todoName = newTodo.todoName;
      return newState;
    });
  };

  const deleteTodo = (index: number) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState.splice(index, 1)
      return newState;
    });
  }

  return { todoState: state, addTodo, editTodo, deleteTodo };
};
