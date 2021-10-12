import React from "react";
import faker from "faker";

const CommentDetail = ({ author, content, timeAgo }) => {
  return (
    <div className="comment">
      <a href="" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="" className="author">
          {author}
        </a>
      </div>
      <div className="metadata">
        <span className="data">{timeAgo}</span>
      </div>
      <div className="text">{content}</div>
    </div>
  );
};
export default CommentDetail;
