import React from "react";

function Task({name, category, handleDelete}) {  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" 
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
}

export default Task;
