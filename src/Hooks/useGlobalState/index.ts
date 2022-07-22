import { useRecoilState } from "recoil";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { todoState, authState } from "State";
import { Todo, Auth } from "Types";

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
      newState.splice(index, 1);
      return newState;
    });
  };

  return { todoState: state, addTodo, editTodo, deleteTodo };
};

export const useAuthState = () => {
  const [state, setState] = useRecoilState(authState);

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();

      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log({ user });
    } catch (e) {
      console.log(e);
    }
  };

  return { authState: state, signUpWithEmail };
};
