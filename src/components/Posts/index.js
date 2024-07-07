import "./index.css";
import Post from "../Post";
import PostContext from "../../Context";

const Posts = () => {
  return (
    <PostContext.Consumer>
      {(value) => {
        const { postsData } = value;

        return (
          <div className="posts-main">
            <ul className="posts">
              {postsData.map((each, index) => (
                <Post data={each} index={index} key={each.id} />
              ))}
            </ul>
          </div>
        );
      }}
    </PostContext.Consumer>
  );
};

export default Posts;
