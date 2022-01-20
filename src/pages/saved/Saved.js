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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
        res.data.map(
          (eachOne) =>
            list.includes(eachOne.id) && setData((prev) => [...prev, eachOne])
        )
      )
      .finally(() => setLoading(false));
  }, [list]);
  if (loading) return <Loading />;
  if (data.length <= 0)
    return <p className="no-saved-item">You have no saved item</p>;
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
