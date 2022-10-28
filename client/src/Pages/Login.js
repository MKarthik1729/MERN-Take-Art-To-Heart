import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";
import { ExclamationCircle } from "react-bootstrap-icons";
import PopUp from "../components/Modal/PopUp";
import styles from "./Login.module.css";

function validateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

const validatePassword = (input) => {
  if (input.length > 6) {
    return true;
  }
  return false;
};

function Login() {
  const navigate = useNavigate();

  const mailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isValid, setIsValid] = useState({
    mail: false,
    password: false,
  });
  const [pop, setPop] = useState(false);
  const [msg, setMsg] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let mail = mailRef.current.value;
    let password = passwordRef.current.value;

    if (!validateEmail(mail) && !validatePassword(password)) {
      setIsValid({
        mail: true,
        password: true,
      });
      return;
    }
    axios
      .post(`/user/login`, {
        useremail: mail,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.msg === "Login Success") {
            setUser({
              role: res.data.data.role,
              user: res.data.data,
              loggedIn: true,
            });
            setMsg(res.data.msg);
            setPop(true);
            navigate("/");
          } else {
            setMsg(res.data.msg);
            setPop(true);
          }
        }
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <div className={styles.content}>
          <h1>Login to your account</h1>
          <h2>It's good to see you again, Please login to continue</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              ref={mailRef}
              className={isValid.mail === true ? styles.invalid : ""}
            />
            {isValid.mail && (
              <div>
                <ExclamationCircle fill="red" className={styles.circle} />
              </div>
            )}
          </div>
          <div className={`${styles.input} ${styles.position}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="*******"
              ref={passwordRef}
              className={isValid.password === true ? styles.invalid : ""}
            />
            {isValid.password && (
              <div>
                <ExclamationCircle fill="red" className={styles.circle} />
              </div>
            )}
            <div className={styles.forgot}>
              <a href="/login">Forgot your password?</a>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <PopUp state={pop} setState={setPop} msg={msg} />
      </div>
    </div>
  );
}

export default Login;
