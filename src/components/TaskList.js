import React, { useState } from "react";
import Task from "./Task"

function TaskList({tasks}) {

const [removeTask, setRemoveTask] = useState(tasks);

function handleDelete(e){
  const filteredList =  removeTask.filter((task)=>{
    return task.text !== e.target.parentNode.children[1].innerText
  })
  //console.log(filteredList)
  //console.log(tasks)
  setRemoveTask(filteredList)
}
  return ( 
  <div className="tasks">
      <ul>
      {removeTask.map((task) => {
        //console.log(task);
        //Do not forget the keyword return or replace curly braces with parenthesis
          return <Task key={task.index} name={task.text} category={task.category} handleDelete={handleDelete}/>
      })}

      </ul>
    </div>
  );
}

export default TaskList;
