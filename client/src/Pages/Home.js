import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import Wallpaper from "../components/Wallpaper";
import styles from "./Home.module.css";

axios.defaults.baseURL = "http://localhost:4000";

function Home() {
  const { user } = useContext(UserContext);

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
      <div className={styles.extra}>
        <div className={styles.extraHeader}>
          <h2>Explore the Content</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
