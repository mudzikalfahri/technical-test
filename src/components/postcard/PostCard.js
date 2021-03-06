import axios from "axios";
import React, { useEffect, useState } from "react";
import "./postcard.css";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function PostCard({ item }) {
  const [poster, setPoster] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=" + item.userId)
      .then((res) => setPoster(res.data[0]));
  }, [item]);
  return (
    <Link to={"/post/" + item.id}>
      <div className="post-card">
        <div className="arrow">
          <BsBoxArrowUpRight />
        </div>
        <div className="profile">
          <div className="circle">
            <p>{poster && poster.name.charAt(0)}</p>
          </div>
          <div className="detail">
            <div className="name">{poster && poster.name}</div>
            <div className="company">{poster && poster.company.name}</div>
          </div>
        </div>
        <div className="title">{item.title}</div>
        <div className="description">
          <p>{item.body}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
