import React, { useRef } from "react";
import styles from "./User.module.css";

const FormModal = (props) => {
  const titleRef = useRef(null);
  const genreRef = useRef(null);
  const urlRef = useRef(null);
  const descRef = useRef(null);

  const submitHandler = () => {
    const titleVal = titleRef.current.value;
    const genreVal = genreRef.current.value;
    const urlVal = urlRef.current.value;
    const descVal = descRef.current.value;

    if (titleVal.length < 6) {
      alert("Title should contain atleast 6 characters");
      return;
    }
    if (urlVal === null) {
      alert("Url should not be empty");
      return;
    }
    if (descVal.length === 0) {
      alert("Please provide some description");
      return;
    }
    props.add({
      id: props.len,
      url: urlVal,
      title: titleVal,
      description: descVal,
    });
    props.change(false);
  };

  const cancelHandler = () => {
    props.change(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.banner}>Add Your art to Storage</div>
          <div className={styles.item}>
            <label htmlFor="name">
              Title<span>*</span>
            </label>
            <input id="name" type="text" name="title" ref={titleRef} />
          </div>
          <div className={styles.item}>
            <label htmlFor="genre">
              Art Genre<span>*</span>
            </label>
            <input id="genre" type="text" name="genre" ref={genreRef} />
          </div>
          <div className={styles.item}>
            <label htmlFor="url">
              URL<span>*</span>
            </label>
            <input id="url" type="text" name="url" ref={urlRef} />
          </div>
          <div className={styles.item}>
            <label htmlFor="desc">
              Description<span>*</span>
            </label>
            <textarea id="desc" name="desc" ref={descRef}></textarea>
          </div>
          <button className={styles.btn} type="submit">
            Submit
          </button>
          <button className={styles.btnCan} onClick={cancelHandler}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
