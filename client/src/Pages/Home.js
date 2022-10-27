import React, { useContext, useEffect, useState } from "react";
import Wallpaper from "../components/Wallpaper";
import styles from "./Home.module.css";
import { UserContext } from "../context/Context";

function Home() {

  const {user} = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}>
          <h1>
            Take Art to
            <span style={{ color: `rgba(231, 84, 128, 1)` }}> Heart </span>
          </h1>
          <h3>Unleash your inner Artist Now, by being part of the community</h3>
          <button>Register Now as an Artist</button>
        </div>
        <Wallpaper />
      </div>
    </>
  );
}

export default Home;
