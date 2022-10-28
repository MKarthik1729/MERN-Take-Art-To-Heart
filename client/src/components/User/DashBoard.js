import React from "react";
import styles from "./User.module.css";

const DashBoard = (props) => {
  console.log(props.user);
  return (
    <div >
      <div className={styles.dashTitle}>
        <img
          src="https://i.pinimg.com/736x/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg"
          className={styles.dashImg}
          alt="profile pic"
        />
        <div className={styles.name} id="name">
          Satya Patnala
          <p>Stanford University, Stanford, USA</p>
          </div>
      </div>
      <div className={styles.dashContent}>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Artistic Name </p>
          <p className={`col ${styles.conBody}`}> {props.user.username.charAt(0).toUpperCase() + props.user.username.slice(1)} </p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Account type </p>
          <p className={`col ${styles.conBody}`}> {props.user.usertype.charAt(0).toUpperCase() + props.user.usertype.slice(1)} </p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Gender </p>
          <p className={`col ${styles.conBody}`}>{props.user.gender.charAt(0).toUpperCase() + props.user.gender.slice(1)}</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Country </p>
          <p className={`col ${styles.conBody}`}>{props.user.country.charAt(0).toUpperCase() + props.user.country.slice(1)}</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Dob </p>
          <p className={`col ${styles.conBody}`}>{props.user.dob}</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Likes received </p>
          <p className={`col ${styles.conBody}`}>2000&#128151;</p>
        </div>
        <div className="d-flex row">
          <p className={`col ${styles.conHead}`}>Artwroks Uploaded </p>
          <p className={`col ${styles.conBody}`}>10</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
