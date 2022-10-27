import React from "react";
import styles from "../Pages/Home.module.css";

const Wallpaper = () => {
  return (
    <div>
      <div className={styles.line}>
        <div className={`card ${styles.imagesBox} ${styles.right}`}>
          <img
            src="https://external-preview.redd.it/ipUXR3Sntl69qo1NgbK6xYfoUNDl69Z3xJZ-gQ8NddA.jpg?auto=webp&s=2dc3d2daa19e2da67b88e20159cf6a46e184a48b"
            alt="Some random art"
          />
        </div>
        <div className={`card ${styles.imagesBox} ${styles.left}`}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rbh47isP1KvVYjOmX_a5JHB_sSwGRDXtqA&usqp=CAU"
            alt="Some random art"
          />
          
        </div> 
      </div>
      <div className={styles.line}>
        <div className={`card ${styles.imagesBox} ${styles.left}`}>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/22/01/23/stag-1998855__340.jpg"
            alt="Some random art"
          />
        </div>
        <div className={`card ${styles.imagesBox} ${styles.right}`}>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg"
            alt="Some random art"
          />
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
