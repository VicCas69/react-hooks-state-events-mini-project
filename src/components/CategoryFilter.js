import React from "react";
import { useState } from "react/cjs/react.development";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter({ categories }) {

  //const [category, setCategory] = useState(categories);
  //const [selected, setSelected] = useState('selected')

  const handleFilter = (e) => {
    e.target.className = 'selected' 
    const selected = categories.map((name) => name) //=== e.target.innerText)
    
    //const finalSelected = selected.map((each)=> each.className !== 'selected')
    //console.log(finalSelected)    
    //console.log(selected)
}



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button key={category.index} onClick={handleFilter}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
