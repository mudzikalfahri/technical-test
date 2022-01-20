import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../../components/postcard/PostCard";
import "./home.css";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="home">
      {data && data.map((item, idx) => <PostCard key={idx} item={item} />)}
      {!data && <Loading />}
    </div>
  );
};

export default Home;
