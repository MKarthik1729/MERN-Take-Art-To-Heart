import React from "react";
import styles from "./User.module.css";

const StorageArts = (props) => {
  return (
    <>
      {props.arts.map((art) => {
        return (
          <div className={`${styles.card} ${styles.cardEffects}`} key={art.id}>
            <img src={art.url} className={styles.cardImage} alt="..." />
            <div className={styles.cardBody}>
              <h5>{art.title}</h5>
              <p> {art.description} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StorageArts;
