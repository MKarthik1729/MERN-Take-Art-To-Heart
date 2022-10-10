import React, { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import SideNavBar from "./SideNavBar";
import AuctionedItems from "./AuctionedItems";
import DashBoard from "./DashBoard";
import Storage from "./Storage";
import SavedArts from "./SavedArts";
import styles from "./User.module.css";

function User() {
  const [display, setDisplay] = useState("dash");

  const { name } = useContext(UserContext);

  return (
    <>
      <div className={`${styles.profile} ${styles.flex}`}></div>
      <div className="row">
        <SideNavBar display={setDisplay} />
        <div className={`col ${styles.empty}`}>
          {display === "dash" && <DashBoard />}
          {display === "str" && <Storage />}
          {display === "save" && <SavedArts />}
        </div>
      </div>
    </>
  );
}

export default User;
