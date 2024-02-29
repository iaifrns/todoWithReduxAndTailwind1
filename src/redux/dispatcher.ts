import { Actions, Status } from "../utils/enum"
import { DATA } from "../utils/types"
import store from "./store"

export const addTodo = (title: string, description : string) => {
    store.dispatch({
        type : Actions.ADDTODO,
        payload : {
            title : title,
            description : description,
            status : Status.TODO
        }
    })
}

export const setSelectedTodoDispatcher = (data : DATA) => {
    store.dispatch({
        type : Actions.SETSELECTEDTODO,
        payload : data
    })
}

export const deleteTodo = (id : number) => {
    store.dispatch({
        type: Actions.DELETETODO,
        payload : {
            id : id
        }
    })
}

export const updateTodo = (data : DATA) => {
    store.dispatch({
        type : Actions.UPDATETODO,
        payload : data
    })
}