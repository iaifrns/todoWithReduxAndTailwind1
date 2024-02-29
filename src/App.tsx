import { Route, Routes } from "react-router-dom";
import AddTodu from "./pages/AddTodu";
import DetailTodo from "./pages/DetailTodo";
import TodoList from "./pages/TodoList";
import { Rout } from "./utils/enum";

function App() {
  return (
    <>
      <Routes>
        <Route path={Rout.TODOLIST} element={<TodoList />} />
        <Route path={Rout.DETAILTODO} element={<DetailTodo />} />
        <Route path={Rout.ADDTODO} element={<AddTodu />} />
      </Routes>
    </>
  );
}

export default App;
