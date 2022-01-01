import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react/cjs/react.development";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });


function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //const [taskFilter, setTaskFilter] = useState(TASKS)
  const [tasks, setTasks] = useState(TASKS)

  function handleSelectedCategory(e){
    setSelectedCategory(e.target.innerText)
  }
    
  const tasksToDisplay = tasks.filter((task) => selectedCategory === 'All' || task.category === selectedCategory);

  function onTaskFormSubmit(newTask){
      setTasks([...tasks, newTask])
      //console.log([...tasks, newTask ])
  }
   
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory ={handleSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
