import React from "react";
import styles from "./User.module.css";

function SideNavBar(props) {
  const dashHandler = (e) => {
    switch (e.target.id) {
      case "dash-nav":
        props.display("dash");
        break;
      case "str-nav":
        props.display("str");
        break;
      case "save-nav":
        props.display("save");
        break;
      default:
        return;
    }
  };

  return (
    <div className={`${styles.card} ${styles.verNav}`}>
      <div className={styles.list}>
        <div
          className={`${styles.flex} ${styles.dashItem} ${
            props.curr === "dash" ? styles.dashActive : ""
          }`}
          id="dash-nav"
          onClick={dashHandler}
        >
          Dashboard
        </div>
        <div
          className={`${styles.flex} ${styles.dashItem} ${
            props.curr === "str" ? styles.dashActive : ""
          }`}
          id="str-nav"
          onClick={dashHandler}
        >
          Storage
        </div>
        <div
          className={`${styles.flex} ${styles.dashItem} ${
            props.curr === "save" ? styles.dashActive : ""
          }`}
          id="save-nav"
          onClick={dashHandler}
        >
          Saved Arts
        </div>
        <div
          className={`${styles.flex} ${styles.dashItem} ${
            props.curr === "auc" ? styles.dashActive : ""
          }`}
        >
          Auctioned Items
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
