import { useState } from "react";
import { addTodo } from "../redux/dispatcher";
import { useNavigate } from "react-router-dom";
import { Rout } from "../utils/enum";

const AddTodu = () => {
  const style = "border-2 p-2 rounded-lg";
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    if(title != "" && description != ""){
        addTodo(title, description);
        navigate(Rout.TODOLIST)
    }else{
        alert("Some elements are empty please fill all")
    }
  }

  return (
    <div className="flex justify-center p-4">
      <div className="w-[500px] p-3">
        <h1 className="text-3xl font-bold italic text-center">Add Todo</h1>
        <div className="grid grid-cols-1 gap-3 mt-8 justify-center">
          <input
            type="text"
            placeholder="Enter the todo name"
            className={style}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the todo description"
            className={style}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleAddTodo}
            className="flex justify-center w-full bg-blue-500 p-2 text-white font-bold rounded-lg"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodu;
