import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

import API from "../../utils/API";
import { Card, Button } from "react-bootstrap";

function PostsList() {
  const [state,_] = useStoreContext();
  console.log("Hi");
  const handleSave = (value) => {
    const bookInfo = value.volumeInfo;

    API.saveBook({
      title: bookInfo.title,
      authors: bookInfo.authors[0],
      description: bookInfo.description,
      image: bookInfo.imageLinks.thumbnail,
      link: bookInfo.infoLink,
    }).catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>All Books</h1>
      <h3 className="mb-5 mt-5">Click on a button  to view or save</h3>
      {state.searchResults.length ? (
        <>
          {state.searchResults.map((item) => (
            <div className="d-flex flex-wrap mb-5 border border-success">
              <Card
                key={item._id}
                style={{ width: "17rem" }}
                className="border-end-success"
              >
                <Card.Title className="mb-4 ml-2">
                  {item.volumeInfo.title} by {item.volumeInfo.authors}
                </Card.Title>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  className="ml-5 mb-2"
                />
              </Card>
              <Card.Body style={{ width: "18rem" }}>
                <div className="float-right">
                  <Button
                    href={item.volumeInfo.infoLink}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button variant="primary" onClick={() => handleSave(item)}>
                    Save
                  </Button>
                  <br></br>
                </div>
                <Card.Text className="mt-5">
                  {item.volumeInfo.description}
                </Card.Text>
              </Card.Body>
            </div>
          ))}
        </>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link to="favorites">View favorites</Link>
      </div>
    </div>
  );
}
export default PostsList;
