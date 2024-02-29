import { useNavigate } from "react-router-dom";
import { Rout } from "../utils/enum";
import { useEffect, useState } from "react";
import { DATA } from "../utils/types";
import store from "../redux/store";
import { deleteTodo, setSelectedTodoDispatcher } from "../redux/dispatcher";

const TodoList = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState<DATA[]>([]);

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  store.subscribe(() => {
    setTodos(store.getState().todos);
  });

  useEffect(() => {
    setTodos(store.getState().todos);
  }, []);

  return (
    <div className="p-4 flex justify-center">
      <div className="w-[500px] flex flex-col justify-center gap-6">
        <h1 className="text-center font-bold text-4xl">Todo List</h1>

        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="grid grid-cols-1 justify-center cursor-pointer"
                onClick={() => {
                  setSelectedTodoDispatcher(todo);
                  navigate(Rout.DETAILTODO);
                }}
              >
                <div className="border border-black p-4 rounded-lg flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">{todo.title}</h1>
                      <p className="bg-red-300 p-1 rounded-md text-white">
                        {todo.status}
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="font-bold text-1xl"
                      onClick={() => handleDeleteTodo(todo.id ?? 0)}
                    >
                      X
                    </button>
                  </div>
                  <div className="h-[1px] bg-gray-300"></div>
                  <p>{todo.description}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1 className="text-center font-bold text-5xl">No Todo Present</h1>
        )}
        <button
          onClick={() => navigate(Rout.ADDTODO)}
          className="absolute flex justify-center bottom-10 right-[30%] font-bold text-3xl rounded-full bg-blue-500 h-12 w-12 text-white p-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoList;
