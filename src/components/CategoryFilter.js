import React from "react";
import { useState } from "react/cjs/react.development";
import { CATEGORIES, TASKS } from "../data";

function CategoryFilter({ categories, handleSelectedCategory, selectedCategory}) {

  const handleSelectedFilter = (e) => {
    handleSelectedCategory(e);
    //handleFilter(task);
}
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button key={category.index} className={category === selectedCategory ? "selected" : ""} onClick={handleSelectedFilter}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
