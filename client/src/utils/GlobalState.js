import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  RENDER_RESULTS,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
} from "./actions";
const StoreContext = createContext();
const { Provider } = StoreContext;
const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false,
      };
    case RENDER_RESULTS:
      console.log(action.payload.items)
      return {
        ...state,
        searchResults: action.payload.items,
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        }),
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.post, ...state.favorites],
        loading: false,
      };
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((post) => {
          return post._id !== action._id;
        }),
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchResults: [],
    currentResults: {
      _id: 0,
      title: "",
      authors: "",
      description: "",
      image: "",
      link: "",
    },
  });
  return <Provider value={[state, dispatch]} {...props} />;
};
const useStoreContext = () => {
  return useContext(StoreContext);
};
export { StoreProvider, useStoreContext };