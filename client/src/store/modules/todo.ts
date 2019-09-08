import { IAction, ITodo } from "./type";
const prefix = 'TODO';

const READ = `${prefix}/LOAD`;


const initState: ITodo[] = [];



export default (state = initState, action: IAction) => {
  switch (action.type) {
    case READ:
      return [...action.payload]
    default:
      return state;
  }
}

export const TodoSelector = (s) => s.todos;

export const loadTodos = (todos: ITodo[]) => ({
  type: READ,
  payload: todos,
});
