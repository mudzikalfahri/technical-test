import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import "./users.css";
function Users() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <div className="userpage-container">
      <h1 className="userlist-title">List of users</h1>
      <div className="usercard-container">
        {data.map((eachOne, idx) => (
          <Link to={"/user/" + eachOne.id} className="user-card" key={idx}>
            <div className="circleee">
              <div className="circle-usercard">{eachOne.name.charAt(0)}</div>
            </div>
            <div className="detail-user">
              <p className="name-usercard">{eachOne.name}</p>
              <p className="company-usercard">{eachOne.company.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;
