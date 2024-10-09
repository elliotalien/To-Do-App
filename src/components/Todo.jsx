import React, { useEffect, useRef, useState } from "react";
import ToDoIcon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

export const Todo = () => {
  const [todoList, settodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      dateAdded: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      }),
    };

    settodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    settodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    settodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) return { ...todo, isComplete: !todo.isComplete };
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white md:place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title section */}
      <div className="flex items-center m-7 gap-2 ">
        <img src={ToDoIcon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input section */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* todo list section */}

      <div>
        {todoList
          .slice()
          .reverse()
          .map((items, index) => {
            return (
              <TodoItems
                key={index}
                text={items.text}
                id={items.id}
                isComplete={items.isComplete}
                dateAdded={items.dateAdded}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
      </div>
    </div>
  );
};
