import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CommentBox from "../../components/comment-box/CommentBox";
import Loading from "../../components/loading/Loading";
import { BsBookmark } from "react-icons/bs";
import "./post.css";
import { useDispatch } from "react-redux";
import { addToSaved } from "../../slices/savedSlice";
import { useSelector } from "react-redux";
import { selectSaved } from "../../slices/savedSlice";
import { removeFromSaved } from "../../slices/savedSlice";

function Post() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [poster, setPoster] = useState(null);
  const [comments, setComments] = useState(null);
  const savedItems = useSelector(selectSaved);
  const params = useParams();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=" + params.id)
      .then((res) => {
        setComments(res.data);
      });
    if (!data) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?id=" + params.id)
        .then((res) => {
          setData(res.data[0]);
        });
    }
    if (data) {
      axios
        .get("https://jsonplaceholder.typicode.com/users?id=" + data.userId)
        .then((res) => setPoster(res.data[0]));
    }
  }, [params, data]);

  if (!data || !poster || !comments) return <Loading />;
  return (
    <div className="post-detail-container">
      <div className="post-detail">
        <div className="title-detail">{data.title}</div>
        <Link to={"/user/" + poster.id} className="profile">
          <div className="circle">
            <p>{poster.name.charAt(0)}</p>
          </div>
          <div className="detail">
            <div className="name">{poster.name}</div>
            <div className="company">{poster.company.name}</div>
          </div>
        </Link>
        <div className="description-detail">
          <p>{data.body}</p>
        </div>
        {savedItems.includes(data.id) ? (
          <button
            onClick={() => dispatch(removeFromSaved(data.id))}
            className="save-post-already"
          >
            <BsBookmark className="saved-icon-already" />
            <p>Saved</p>
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToSaved(data.id))}
            className="save-post"
          >
            <BsBookmark className="saved-icon" />
            <p>Save this post</p>
          </button>
        )}
      </div>
      <div className="comment-container">
        {comments.map((comment, idx) => (
          <CommentBox key={idx} item={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
