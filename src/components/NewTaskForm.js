import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [options, setOptions] = useState("Code");
  const [details, setDetails] = useState("");

  function handleOptions(e){
    setOptions(e.target.value)
    //console.log(e.target.value)
  }

  function handleDetails(e){
    setDetails(e.target.value)
    //console.log(e.target.value)
  }

   const newCategories = categories.filter((category) => category !== "All")
   const newTask = {
     text: details,
     category: options
   }

   function handleSubmit(e){
      e.preventDefault();
      onTaskFormSubmit(newTask)
   }



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={details}
        onChange={handleDetails} />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={options}
        onChange={handleOptions}>
          {newCategories.map((category)=> {
            return <option value={category}>{category}</option>
          })
          /* render <option> elements for each category here */
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
