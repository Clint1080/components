import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = (author, timeAgo, content) => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={"sam"}
        timeAgo={"today at 4:45pm"}
        content={"Refer to me as lord clintitus"}
      />
      <CommentDetail
        author={"jane"}
        timeAgo={"today at 2:00am"}
        content={"behold my power"}
      />
      <CommentDetail
        author={"alex"}
        timeAgo={"yesterday at 6:45pm"}
        content={"You're doing it billy"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
