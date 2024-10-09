import React from "react";
import not_tick from '../assets/not_tick.png';
import tick from '../assets/tick.png';
import delete_png from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, dateAdded, deleteTodo, toggle }) => {
  return (
    <div onClick={() => { toggle(id) }} className="flex items-center my-3 gap-2 ">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={isComplete ? tick : not_tick} alt="Tick Icon" className="w-7" />
        <p style={{ overflowWrap: 'break-word', wordBreak: 'break-all', maxWidth: '200px' }} className={`text-slate-700 ml-4 text-${17}px decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        <p className="text-orange-600 ml-4 text-sm">{dateAdded}</p>
      </div>

      <img onClick={() => { deleteTodo(id) }} src={delete_png} alt="Tick Icon" className="w-3.5 cursor-pointer" />

    </div>
  );
};

export default TodoItems;