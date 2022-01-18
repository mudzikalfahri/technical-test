import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/postcard/PostCard";
import "./home.css";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="home">
      {data && data.map((item) => <PostCard item={item} />)}
      {!data && "loading"}
    </div>
  );
};

export default Home;
