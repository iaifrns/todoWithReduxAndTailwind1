export interface DATA {
    id?: number,
    title? : string,
    description? : string,
    status? : string
}

export interface ActionType {
    type : string,
    payload : DATA
}

export interface Store {
    todos : DATA[],
    selectedTodo : DATA
}