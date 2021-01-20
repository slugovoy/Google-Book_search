import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const searchRef = useRef();
 
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchRef.current.value)
    // dispatch({ type: LOADING });
    // API.savePost({
    //   title: titleRef.current.value,
    //   body: bodyRef.current.value,
    //   author: authorRef.current.value
    // })
    //   .then(result => {
    //     dispatch({
    //       type: ADD_POST,
    //       post: result.data
    //     });
    //   })
    //   .catch(err => console.log(err));

    // titleRef.current.value = "";
    // bodyRef.current.value = "";
  };

  return (
    <div>
      <h2>Search for a book</h2>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={searchRef} placeholder="Enter book name here..." />
      
        <button className="btn btn-success mt-3 mb-5"  type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
