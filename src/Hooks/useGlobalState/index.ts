import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import useAxios from "../useAxios";

import { todoState, authState } from "State";
import { Todo } from "Types";

export const useTodoState = () => {
  const [state, setState] = useRecoilState(todoState);
  const { isSignedIn } = useRecoilValue(authState);
  const { get, post, put, remove } = useAxios();

  const getTodo = async () => {
    if (!isSignedIn) return;

    try {
      const res = await get("/todo");
      console.log({ res });
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (newTodo: Todo) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState.push(newTodo);
      return newState;
    });

    if (!isSignedIn) return;
    try {
      const res = await post("/todo", {
        todo: newTodo,
      });
      console.log({ res });
    } catch (e) {
      console.log(e);
    }
  };

  const editTodo = async (
    oldTodo: Todo,
    newValues: Partial<Todo>,
    index: number
  ) => {
    const newTodo: Todo = {
      id: oldTodo.id,
      todoName: newValues.todoName || oldTodo.todoName,
      priority: newValues.priority || oldTodo.priority,
      status: { ...oldTodo.status, ...newValues.status },
      addedBy: newValues.addedBy || oldTodo.addedBy,
      dueBy: newValues.dueBy || oldTodo.dueBy,
      pending: newValues.pending || oldTodo.pending,
    };

    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState[index] = newTodo;
      return newState;
    });

    if (!isSignedIn) return;
    try {
      const res = await put("/todo", {
        todo: newTodo,
      });
      console.log({ res });
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (todoId: string, index: number) => {
    setState((prev) => {
      const newState: Todo[] = JSON.parse(JSON.stringify(prev));
      newState.splice(index, 1);
      return newState;
    });

    if (!isSignedIn) return;

    try {
      const res = await remove(`/todo/${todoId}`);
      console.log({ res });
    } catch (e) {
      console.log(e);
    }
  };

  return { todoState: state, addTodo, editTodo, deleteTodo, getTodo };
};

export const useAuthState = () => {
  const [state, setState] = useRecoilState(authState);
  const todoSetState = useSetRecoilState(todoState);
  const { get } = useAxios();

  const checkIfSignedIn = async () => {
    const auth = getAuth();

    const waitForAuthInit = async () => {
      let unsubscribe: any;
      await new Promise<void>((resolve) => {
        unsubscribe = onAuthStateChanged(auth, (_) => resolve());
      });
      (await unsubscribe!)();
    };

    await waitForAuthInit();
    const user = auth.currentUser;

    if (!user) return setState({ isSignedIn: false });
    const idToken = await getAuth().currentUser?.getIdToken(true);
    const res = await get<Todo[]>(`/todo`, {
      headers: { authorization: `Bearer: ${idToken}` },
    });

    todoSetState(res.data);
    setState({ isSignedIn: true, idToken });
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();

      await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await getAuth().currentUser?.getIdToken(true);
      setState({ isSignedIn: true, idToken });
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const auth = getAuth();

      await signInWithEmailAndPassword(auth, email, password);
      const idToken = await getAuth().currentUser?.getIdToken(true);
      setState({ isSignedIn: true, idToken });

      if (!idToken) throw new Error("Invalid IdToken for user");
      const res = await get<Todo[]>(`/todo`, {
        headers: { authorization: `Bearer: ${idToken}` },
      });

      todoSetState(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const signOutUser = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      setState({ isSignedIn: false });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    authState: state,
    checkIfSignedIn,
    signUpWithEmail,
    signInWithEmail,
    signOutUser,
  };
};
