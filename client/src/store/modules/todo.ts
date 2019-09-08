


import { IAction, ITodo } from "./type";
const prefix = 'TODO';

const CREATE = `${prefix}/CREATE`;


const test = () => {
  return [...Array(20)].map((v, k) => ({ id: k.toString(), title: '123', create_at: new Date().getTime(), isDone: false, update_at: new Date().getTime() }))
}

const initState: ITodo[] = test();






export default (state = initState, action: IAction) => {
  switch (action.type) {
    case CREATE:
      return [action.payload, ...state]
    default:
      return state;
  }
}

export const TodoSelector = (s) => s.todos;

export const addTodo = (todo) => ({
    type: CREATE,
    payload: todo,
});
