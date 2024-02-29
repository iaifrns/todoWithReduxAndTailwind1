import { combineReducers, legacy_createStore } from "redux";
import { reducer, setSelectedTodoReducer } from "./reducer";
import { Store } from "../utils/types";

export const initialStore : Store = {
    selectedTodo : {},
    todos : []
}

const reducers = combineReducers({
    todos : reducer,
    selectedTodo : setSelectedTodoReducer,
})

const store = legacy_createStore(reducers);

export default store;