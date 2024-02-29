import { Actions } from "../utils/enum";
import { ActionType, DATA } from "../utils/types";
import { initialStore } from "./store";

let lastId = 0;

export const reducer = (state: DATA[] = initialStore.todos, action: ActionType) => {
  switch (action.type) {
    case Actions.ADDTODO:
      return [
        ...state,
        {
          id: lastId++,
          description: action.payload.description,
          title: action.payload.title,
          status: action.payload.status,
        },
      ];
      break;
    case Actions.DELETETODO:
      return state.filter((todo) => todo.id != action.payload.id);
      break;
    case Actions.UPDATETODO:
        const newArr : DATA[] = []
        state.forEach(item => {
            if(item.id == action.payload.id){
                newArr.push(action.payload)
            }else{
                newArr.push(item)
            }
        })
        return newArr;
      break;
    default:
      return state;
      break;
  }
};

export const setSelectedTodoReducer = (state : DATA = initialStore.selectedTodo, action : ActionType) => {
    if(action.type == Actions.SETSELECTEDTODO){
        return action.payload
    }
    return state;
}