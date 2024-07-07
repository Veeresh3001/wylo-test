import React from "react";

const PostContext = React.createContext({
  postsData: [],
  changeHeading: () => {},
  changeDescription: () => {},
  onClickNewPost: () => {},
  changeActivePost: () => {},
});

export default PostContext;
