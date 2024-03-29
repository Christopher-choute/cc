import React from "react";

function SearchBar({search, setSearch}) {
  function handleSearch(e){
    const value = e.target.value
    setSearch(value)
  }


  return (
    <div className="search">
      <input 
      type="text" 
      className="searchTerm"
      onChange ={handleSearch}
      value={search}
       />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
