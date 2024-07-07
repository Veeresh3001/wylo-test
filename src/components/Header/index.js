import { v4 as uuidV4 } from "uuid";
import PostContext from "../../Context";

import { FaPlus } from "react-icons/fa6";

import "./index.css";

const Header = () => {
  return (
    <PostContext.Consumer>
      {(value) => {
        const { onClickNewPost } = value;

        const onClickNew = () => {
          const id = uuidV4();
          const newItem = {
            id,
            heading: "Heading",
            description: "Description",
          };
          onClickNewPost(newItem);
        };

        return (
          <div className="header">
            <h1 className="logo">Welcome To WyLo</h1>
            <button
              type="button"
              className="btn desktop-button"
              onClick={onClickNew}
            >
              <FaPlus className="plus-icon" size={15} /> New Post
            </button>
            <button
              type="button"
              className="btn mobile-button"
              onClick={onClickNew}
            >
              <FaPlus className="plus-icon" size={15} />
            </button>
          </div>
        );
      }}
    </PostContext.Consumer>
  );
};

export default Header;
