import React from "react";

function CommentBox({ item }) {
  return (
    <div className="comment-box">
      <div className="left-box">
        <div className="picture-comment">
          <div className="picture">
            <p>{item.name.charAt(0)}</p>
          </div>
        </div>
        <div className="line-comment">
          <div className="line"></div>
        </div>
      </div>
      <div className="right-box">
        <div className="right-box-container">
          <div className="name-comments">{item.name}</div>
          <div className="body-comments">{item.body}</div>
        </div>
      </div>
    </div>
  );
}

export default CommentBox;
