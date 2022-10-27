import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const name = useRef();
  const email = useRef();
  const pass = useRef();
  const conPass = useRef();
  const country = useRef();
  const dob = useRef();
  const gender = useRef();
  const register = useRef();

  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitted')
    const sendData = {
      username: name.current.value,
      useremail: email.current.value,
      password: pass.current.velue,
      country: country.current.value,
      dob: dob.current.value,
      gender: gender.current.value,
      usertype: register.current.value,
    };
    console.log(sendData);
    navigate("/login");
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
          <input id="password" type="text" ref={pass} placeholder="Password" />
        </div>
        <div className={styles.fields}>
          <label htmlFor="confirm"> Confirm Password : </label>
          <input
            id="confirm"
            type="text"
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
            <option value="buyer">buyer</option>
            <option value="bidder">bidder</option>
            <option value="both">Both</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Register;
