import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalImage from "react-modal-image";

function AlbumCard({ item }) {
  const [photos, setPhotos] = useState(null);
  const [limited, setLimited] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?albumId=" + item.id)
      .then((res) => setPhotos(res.data));
  }, [item]);
  if (!photos) return <div className=""></div>;
  return (
    <div className="album-card">
      <p className="album-title">{item.title}</p>
      <div className="photo-grid">
        {photos
          .filter((photo, idx) => (limited ? idx < 10 : true))
          .map((photo, idx) => (
            <div className="photo-container" key={idx}>
              <ModalImage
                small={photo.thumbnailUrl}
                large={photo.url}
                alt={photo.title}
                className="photo-thumbnail"
              />
            </div>
          ))}
      </div>
      <div className="btn-container">
        {limited ? (
          <button onClick={() => setLimited(false)} className="show-more">
            Show more
          </button>
        ) : (
          <button onClick={() => setLimited(true)} className="show-more">
            Show less
          </button>
        )}
      </div>
    </div>
  );
}

export default AlbumCard;
