import { IAction, ITodo } from "./type";
const prefix = 'TODO';

const INIT = `${prefix}/INIT`;
const READ = `${prefix}/LOAD`;
const TOGGLE = `${prefix}/TOGGLE`;



const initState: ITodo[] = [];



export default (state = initState, action: IAction) => {
  switch (action.type) {
    case INIT:
      return initState
    case READ:
      return [...action.payload]
    case TOGGLE:
      return state.map((t) => (
        t.id === action.payload.id ? {...t, isDone: !t.isDone } : t
      ))
    default:
      return state;
  }
}

export const TodoSelector = s => s.todos;

export const loadTodos = (todos: ITodo[]) => ({
  type: READ,
  payload: todos,
});

export const initTodos = () => ({
  type: INIT,
})

export const toggleIsDone = (id: string) => ({
  type: TOGGLE,
  payload: {
    id
  }
});
