import React, { useState } from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {

function handleDelete(e){
  return e.target.parentNode.remove()
}
  return ( 
  <div className="tasks">
      <ul>
      {tasks.map((task) => {
        //console.log(task);
        //Do not forget the keyword return or replace curly braces with parenthesis
          return <Task key={task.index} name={task.text} category={task.category} handleDelete={handleDelete}/>
      })}
      </ul>
    </div>
  );
}

export default TaskList;
