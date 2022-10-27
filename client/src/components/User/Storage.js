import React, { useState } from "react";
import FormModal from "./FormModal";
import StorageArts from "./StorageArts";
import styles from "./User.module.css";

const Storage = (props) => {
  const [form, setForm] = useState(false);

  const formHandler = (e) => {
    setForm(true);
  };

  return (
    <>
      <h2 className="text-center">My Gallery</h2>
      <div className={styles.storage}>
        <StorageArts arts={props.arts} />
      </div>
      {props.arts.length === 0 && (
        <div className="empty-gallery">
          <h2 className="text-center">You have no artworks in your gallery</h2>
        </div>
      )}
      {form ? (
        <FormModal change={setForm} add={props.add} len={props.arts.length}/>
      ) : (
        <button className={styles.add} onClick={formHandler}>
          +
        </button>
      )}
    </>
  );
};

export default Storage;
