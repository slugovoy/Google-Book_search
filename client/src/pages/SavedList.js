// Packages and variables
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, GET_FAVORITE } from "../utils/actions";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";

// List of favorite books page
const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  // Call to get all saved books in database
  const getFavorites = () => {
    API.getAllBooks({}).then(({ data }) =>
      dispatch({
        type: GET_FAVORITE,
        data: data,
      })
    );
  };

  // Handle delete book
  const removeFromFavorites = (id) => {
    API.deleteBook(id).then(({ data }) =>
      dispatch({
        type: REMOVE_FAVORITE,
        data: { data, state },
      })
    );
  };

  // Load all saved books when page renders
  useEffect(() => {
    getFavorites();
  }, [state.savedBooks]);

  // Render component
  return (
    <div className="col-sm-12">
      <h1 className="text-center">Here's All of Your Favorite Books</h1>
      {state.savedBooks.length ? (
        <div>
          {state.savedBooks.map((item) => (
            <div
              key={item._id + 2}
              className="d-flex flex-wrap mb-5 border border-success"
            >
              <Card
                key={item._id}
                style={{ width: "17rem" }}
                className="border-end-success"
              >
                <Card.Title className="mb-4 ml-2">
                  {item.title} by {item.authors}
                </Card.Title>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={item.image}
                  className="ml-5 mb-2"
                />
              </Card>
              <Card.Body key={item._id + 1} style={{ width: "18rem" }}>
                <div className="float-right">
                  <Button
                    href={item.link}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => removeFromFavorites(item._id)}
                  >
                    Delete
                  </Button>
                  <br></br>
                </div>
                <Card.Text className="mt-5">{item.description}</Card.Text>
              </Card.Body>
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
