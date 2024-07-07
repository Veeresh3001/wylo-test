import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import PostContext from "../../Context";

const Post = (props) => {
  const { data, index } = props;
  const [like, setLike] = useState(false);
  const [editPost, setEditPost] = useState(false);

  return (
    <PostContext.Consumer>
      {(value) => {
        const { changeDescription, changeHeading, changeActivePost } = value;

        const onChangeHead = (event) => {
          changeHeading(event.target.value);
        };

        const onChangeDesc = (event) => {
          changeDescription(event.target.value);
        };

        const onclickLike = () => setLike((prev) => !prev);

        const onclickEdit = () => {
          changeActivePost(index);
          setEditPost((prev) => !prev);
        };

        return (
          <li>
            <div className="data">
              {editPost ? (
                <div className="input-card">
                  <input
                    type="text"
                    value={data.heading}
                    onChange={onChangeHead}
                  />
                  <textarea value={data.description} onChange={onChangeDesc} />
                </div>
              ) : (
                <>
                  <h1>{data.heading}</h1>
                  <p>{data.description}</p>
                </>
              )}
            </div>
            <div className="icons-card">
              <button type="button" onClick={onclickLike}>
                {like ? (
                  <FaHeart size={20} color="red" />
                ) : (
                  <FaRegHeart size={20} />
                )}
              </button>
              <button type="button" onClick={onclickEdit}>
                {editPost ? "Done" : <CiEdit size={20} />}
              </button>
            </div>
          </li>
        );
      }}
    </PostContext.Consumer>
  );
};

export default Post;
