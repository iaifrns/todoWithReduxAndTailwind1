import { useEffect, useState } from "react";
import { DATA } from "../utils/types";
import store from "../redux/store";
import { updateTodo } from "../redux/dispatcher";
import { Status } from "../utils/enum";

const DetailTodo = () => {

    const [todo, setTodo] = useState<DATA>();

    const handleUpdateTodo = (status:string) => {
        updateTodo({
            ...todo,
            status : status
        })
    }

    store.subscribe(()=>{
        setTodo(store.getState().todos[store.getState().selectedTodo.id ?? 0])
    })

    useEffect( () => {
        setTodo(store.getState().selectedTodo)
    } ,[]);

    return (
    <div className="min-h-screen flex justify-center item-center">
      <div className="w-[600px] flex flex-col gap-4 p-4">
        <h1 className="text-3xl font-bold text-center m-8">Todo Detail</h1>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl">{todo?.title}</h1>
          <p className="bg-red-300 rounded-lg text-white p-2">{todo?.status}</p>
        </div>

        <div className="p-2">
          {todo?.description}
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            onClick={()=>handleUpdateTodo(Status.DONE)}
            className="bg-green-500 p-2 w-36 rounded-lg font-semibold text-white"
          >
            done
          </button>
          <button
            type="submit"
            onClick={()=>handleUpdateTodo(Status.DONING)}
            className="bg-blue-500 p-2 w-36 rounded-lg font-semibold text-white"
          >
            doing
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailTodo;
