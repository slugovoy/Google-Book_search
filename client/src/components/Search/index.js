import React from "react";

function Search() {
  return (
    <div>
    <h3>Book Search</h3>
    <h5>Book</h5>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-dark mt-3 mb-5"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
