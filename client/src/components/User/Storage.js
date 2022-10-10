import React from "react";
import styles from "./User.module.css";

const Storage = () => {
  return (
    <div >
      <h2 className="text-center">My Gallery</h2>
      <br />
      <div className="row">
        <div className="col">
          <div className={`${styles.card} ${styles.cardEffects}`}>
            <img src="<%= arts.url %>" class={styles.cardImage} alt="..." />
            <div className="card-body">
              <h5 className="card-title"> arts.title</h5>
              <p className="card-text"> arts.description </p>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-gallery">
        <h2 className="text-center">You have no artworks in your gallery</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          id="add-pic-svg"
          className="bi bi-plus-circle icon-sizing"
          viewBox="0 0 24 24"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <input type="file" id="file" className="d-none" accept=".png" />
      </div>
    </div>
  );
};

export default Storage;
