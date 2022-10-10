import React from "react";
import styles from "./User.module.css";

const DashBoard = () => {
  return (
    <div >
      <div className={styles.dashTitle}>
        <img
          src="https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg"
          className={styles.dashImg}
          alt="profile pic"
        />
        <div className={styles.name} id="name">
          user.username
        </div>
      </div>
      <div className={styles.dashContent}>
        <p>Stanford University, Stanford, USA</p>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Artistic Name: </p>
          <p className={`col ${styles.conBody}`}>user.username</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Account type: </p>
          <p className={`col ${styles.conBody}`}>user.userType</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Country: </p>
          <p className={`col ${styles.conBody}`}>user.country</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Number of Likes: </p>
          <p className={`col ${styles.conBody}`}>10</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Number of Artworks: </p>
          <p className={`col ${styles.conBody}`}>10</p>
        </div>
      </div>
      <a href="/uploadForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          id="add-pic-svg"
          className="bi bi-plus-circle icon-sizing"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </a>
    </div>
  );
};

export default DashBoard;
