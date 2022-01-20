import React, { useEffect, useState, useMemo } from "react";
import "./saved.css";
import { selectSaved } from "../../slices/savedSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import PostCard from "../../components/postcard/PostCard";

function Saved() {
  const idList = useSelector(selectSaved);
  const list = useMemo(() => idList, [idList]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
        res.data.map(
          (eachOne) =>
            list.includes(eachOne.id) && setData((prev) => [...prev, eachOne])
        )
      );
  }, [list]);
  if (data.length <= 0) return <Loading />;
  return (
    <div className="saved-container">
      <h1 className="saved-h1">Saved Posts</h1>
      <div className="post-list">
        {data.map((eachOne, idx) => (
          <PostCard item={eachOne} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Saved;
