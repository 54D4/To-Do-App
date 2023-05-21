import { useRef } from "react";
import { useState } from "react";
import Todos from "./todos";

const createTodo = (name) => {
  return {
    name: name,
    id: Math.floor(Math.random() * 100000),
  };
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  return (
    <>
      <div className=" w-full p-4 flex flex-col items-center">
        <h1 className=" text-4xl my-4 font-semibold">
          What are you going{" "}
          <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            to do ?
          </span>
        </h1>
        <div className="my-8">
          <input
            type="text"
            placeholder="add to do"
            className=" border-b-2 px-4 my-8 mx-4 border-gray-700 bg-inherit w-[300px]"
            ref={inputRef}
          />
          <button
            className="  px-4 py-1 rounded-lg border-gray-500  text-lg shadow-buttonShadow"
            onClick={() => {
              setTodos([...todos, createTodo(inputRef.current.value)]);
              inputRef.current.value = "";
            }}
          >
            submit
          </button>
        </div>
        <div>
          {todos.map((e) => (
            <Todos
              id={e.id}
              key={e.id}
              name={e.name}
              deleteFunction={() =>
                setTodos(todos.filter((todo) => todo.id !== e.id))
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
