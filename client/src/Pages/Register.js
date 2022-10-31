import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { UserContext } from "../context/Context";
import axios from "axios";

function Register() {
  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);
  const conPass = useRef(null);
  const country = useRef(null);
  const dob = useRef(null);
  const gender = useRef(null);
  const register = useRef(null);
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();

    const sendData = {
      username: name.current.value,
      useremail: email.current.value,
      password: pass.current.value,
      country: country.current.value,
      dob: dob.current.value,
      gender: gender.current.value,
      usertype: register.current.value,
      role: "user",
    };
    axios.post("/user/register", sendData).then((res) => {
      if (res.status === 200) {
        setUser({
          role: res.data.data.role,
          user: res.data.data,
          loggedIn: true,
        });
        console.log(res);
        navigate("/");
      }
    });
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.content}>
        <h1>Hello, it's a pleasure to meet you.</h1>
        <h2>Register here </h2>
      </div>
      <form onSubmit={HandleSubmit} className={styles.form}>
        <div className={styles.fields}>
          <label htmlFor="username"> User Name : </label>
          <input id="username" type="text" ref={name} placeholder="Username" />
        </div>
        <div className={styles.fields}>
          <label htmlFor="email"> Email : </label>
          <input id="email" type="email" ref={email} placeholder="Email" />
        </div>
        <div className={styles.fields}>
          <label htmlFor="password"> Password : </label>
          <input
            id="password"
            type="password"
            ref={pass}
            placeholder="Password"
          />
        </div>
        <div className={styles.fields}>
          <label htmlFor="confirm"> Confirm Password : </label>
          <input
            id="confirm"
            type="password"
            ref={conPass}
            placeholder="Confirm Password"
          />
        </div>
        <div className={styles.fields}>
          <label htmlFor="country"> Country : </label>
          <input id="country" type="text" ref={country} placeholder="Country" />
        </div>
        <div className={styles.fields}>
          <label htmlFor="dob"> Date of Birth : </label>
          <input type="date" ref={dob} placeholder="Date of Birth" />
        </div>
        <div className={styles.fields}>
          <label htmlFor="gender"> Gender : </label>
          <select name="gender" ref={gender} id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.fields}>
          <label name="type"> Register as : </label>
          <select name="type" id="type" ref={register}>
            <option value="artist">Artist</option>
            <option value="bidder">Bidder</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
