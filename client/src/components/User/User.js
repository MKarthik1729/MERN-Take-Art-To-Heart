import React, { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import SideNavBar from "./SideNavBar";
import AuctionedItems from "./AuctionedItems";
import DashBoard from "./DashBoard";
import Storage from "./Storage";
import SavedArts from "./SavedArts";
import styles from "./User.module.css";

const storage_arts = [
  {
    id: 1,
    url: "https://external-preview.redd.it/ipUXR3Sntl69qo1NgbK6xYfoUNDl69Z3xJZ-gQ8NddA.jpg?auto=webp&s=2dc3d2daa19e2da67b88e20159cf6a46e184a48b",
    title: "A Cute fiction",
    description: "Nothing to describe except her beauty",
  },
  {
    id: 2,
    url: "https://external-preview.redd.it/ipUXR3Sntl69qo1NgbK6xYfoUNDl69Z3xJZ-gQ8NddA.jpg?auto=webp&s=2dc3d2daa19e2da67b88e20159cf6a46e184a48b",
    title: "A Cute fiction",
    description: "Nothing to describe except her beauty",
  },
  {
    id: 3,
    url: "https://external-preview.redd.it/ipUXR3Sntl69qo1NgbK6xYfoUNDl69Z3xJZ-gQ8NddA.jpg?auto=webp&s=2dc3d2daa19e2da67b88e20159cf6a46e184a48b",
    title: "A Cute fiction",
    description: "Nothing to describe except her beauty",
  },
];

function User() {
  const [display, setDisplay] = useState("dash");
  const [arts, setArts] = useState(storage_arts);

  const addArts = (artObj) => {
    setArts((prev) => {
      return [...prev, artObj];
    });
  };

  const { user } = useContext(UserContext);

  return (
    <>
      <div className={styles.user}>
        <div className={`${styles.profile} ${styles.flex}`}></div>
        <div className={styles.content}>
          <SideNavBar display={setDisplay} curr={display} />
          <div className={`${styles.empty}`}>
            {display === "dash" && <DashBoard user={user.user}/>}
            {display === "str" && <Storage arts={arts} add={addArts}/>}
            {display === "save" && <SavedArts />}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
