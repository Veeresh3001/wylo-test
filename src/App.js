import { Component } from "react";
import Header from "./components/Header";

import Posts from "./components/Posts";
import PostContext from "./Context";

const initialData = [
  {
    id: "cc6e1e78-a063-11ec-b909-0242ac120002",
    heading: "Cyber Security",
    description:
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. ",
  },
  {
    id: "cc6e1fc2-a063-11ec-b909-0242ac120002",
    heading: "IoT",
    description:
      "The IoT (Internet-of-Things) is a system of interconnected computing devices, providing unique identifiers and the ability to send and receive data over a network.",
  },
  {
    id: "cc6e20f8-a063-11ec-b909-0242ac120002",
    heading: "AI-ML",
    description:
      "AIML (Artificial Intelligence Markup Language) is a description language used in the development of natural language software agents like chatbots and virtual assistants.",
  },
  {
    id: "cc6e2224-a063-11ec-b909-0242ac120002",
    heading: "Blockchain",
    description:
      "Blockchain programming is writing smart contracts that run exactly as programmed without any chance for fraud, and building end-to-end applications for blockchain.",
  },
  {
    id: "cc6e233c-a063-11ec-b909-0242ac120002",
    heading: "Java",
    description:
      "Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies",
  },
  {
    id: "cc6e233c-a063-11ec-dj48-0242ac120002",
    heading: "Python",
    description:
      "Python is a computer programming language often used to build websites and software, automate tasks, and analyze data. Python is a general-purpose language, not specialized for any specific problems, and used to create various programmes.",
  },
  {
    id: "cc6e233c-a063-11ec-34gk-0242ac120002",
    heading: "JavaScript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages",
  },
  {
    id: "cc6e233c-a063-58jf-34gk-0242ac120002",
    heading: "SQL",
    description:
      "Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.",
  },
];

class App extends Component {
  state = {
    postsList: initialData,
    activePost: 0,
  };

  onChangeActivePost = (index) => {
    this.setState({ activePost: index });
  };

  addNewPost = (newPost) => {
    const { postsList } = this.state;
    this.setState({ postsList: [newPost, ...postsList] });
  };

  onChangeHeading = (value) => {
    const { activePost } = this.state;
    this.setState((prev) => {
      const { postsList } = prev;
      const updateData = postsList.map((each, index) => {
        if (index === activePost) {
          return { ...each, heading: value };
        }
        return each;
      });
      return { postsList: updateData };
    });
  };

  onChangeDescription = (value) => {
    const { activePost } = this.state;
    this.setState((prev) => {
      const { postsList } = prev;
      const updateData = postsList.map((each, index) => {
        if (index === activePost) {
          return { ...each, description: value };
        }
        return each;
      });
      return { postsList: updateData };
    });
  };

  render() {
    const { postsList } = this.state;
    return (
      <PostContext.Provider
        value={{
          postsData: postsList,
          onClickNewPost: this.addNewPost,
          changeHeading: this.onChangeHeading,
          changeDescription: this.onChangeDescription,
          changeActivePost: this.onChangeActivePost,
        }}
      >
        <div>
          <Header />
          <Posts />
        </div>
      </PostContext.Provider>
    );
  }
}

export default App;
