import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { Card, Button } from "react-bootstrap";
function PostsList() {
  const [state, dispatch] = useStoreContext();
  console.log( "Hi")
  const handleSave = (e) => {
    console.log(e.target.data);
    // API.saveBook({
    //   title: titleRef.current.value,
    //   authors: bodyRef.current.value,
    //   description: authorRef.current.value,
    //   image: imageRef.current.value,
    //   link: linkRef.current.value,
    // })
    //   .then((result) => {
    //     dispatch({
    //       type: ADD_POST,
    //       post: result.data,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    // titleRef.current.value = "";
    // bodyRef.current.value = "";
  };
  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {state.searchResults.length ? (
        <>
          {state.searchResults.map((item) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={item.volumeInfo.imageLinks.thumbnail}
              />
              <Card.Body>
                <Card.Title>
                  {item.volumeInfo.title} by {item.volumeInfo.authors}
                </Card.Title>
                <Card.Text>{item.volumeInfo.description}</Card.Text>
                <Button
                  href={item.volumeInfo.infoLink}
                  target="_blank"
                  variant="primary"
                  style={{ marginRight: "10px" }}
                >
                  View
                </Button>
                <Button
                  variant="primary"
                  onClick={handleSave}
                  data={[
                    item.volumeInfo.imageLinks.thumbnail,
                    item.volumeInfo.title,
                    item.volumeInfo.authors,
                    item.volumeInfo.description,
                    item.volumeInfo.infoLink,
                  ]}
                >
                  Save
                </Button>
              </Card.Body>
            </Card>
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
