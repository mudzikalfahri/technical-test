import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AlbumCard from "../../components/albumcard/AlbumCard";
import Loading from "../../components/loading/Loading";
import "./profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState(null);
  console.log(albums);
  const params = useParams();
  useEffect(() => {
    if (!user) {
      axios
        .get("https://jsonplaceholder.typicode.com/users?id=" + params.id)
        .then((res) => setUser(res.data[0]));
    }
    if (user) {
      axios
        .get("https://jsonplaceholder.typicode.com/albums?userId=" + user.id)
        .then((res) => setAlbums(res.data));
    }
  }, [params.id, user]);
  if (!user || !albums) return <Loading />;
  return (
    <div className="profile-page-container">
      {/* User information section */}
      <div className="profile-page-user">
        <div className="profile-page-pp">{user.name.charAt(0)}</div>
        <div className="profile-acc-info">
          <h1 className="profile-page-name">{user.name}</h1>
          <p className="username">{user.username}</p>
          <div className="profile-page-detail">
            <div className="list-detail">
              <p className="list-detail-label">Phone</p>
              <p className="number">{user.phone}</p>
            </div>
            <div className="list-detail">
              <p className="list-detail-label">Email</p>
              <p className="number">{user.email}</p>
            </div>
            <div className="list-detail">
              <p className="list-detail-label">Location</p>
              <p className="number">{`${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            </div>
            <div className="list-detail">
              <p className="list-detail-label">Company</p>
              <p className="number">{user.company.name}</p>
            </div>
          </div>
        </div>
      </div>
      {/* albums section */}
      <h1 className="album-heading">List of albums</h1>
      <div className="albums-section">
        {albums.map((album) => (
          <AlbumCard key={album.id} item={album} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
