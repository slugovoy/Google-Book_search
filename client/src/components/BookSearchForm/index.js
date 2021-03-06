// Packages and variables
import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { RENDER_RESULTS } from "../../utils/actions";

// URL for API call
const Base_URL = "https://www.googleapis.com/books/v1/volumes?q=";

function BookSearchForm() {

  // Referense hook and state
  const searchRef = useRef();
  const [state, dispatch] = useStoreContext();

  // Handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = Base_URL + searchRef.current.value;

    // API call to google books
    fetch(query)
      .then((data) => data.json())
      .then((data) => {
        if (data.items.length > 0) {
          dispatch({
            type: RENDER_RESULTS,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));

      // Clean up the search area after
    searchRef.current.value = "";
  };

  // Render search form
  return (
    <div>
      <h2>Search for a book</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={searchRef}
          placeholder="Enter book name here..."
        />

        <button className="btn btn-success mt-3 mb-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default BookSearchForm;
