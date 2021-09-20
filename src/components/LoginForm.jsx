import React, { Fragment, useState } from "react";
import AuthCommunicator from "../services/AuthCommunicator";
import { Form, Button } from "react-bootstrap";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthCommunicator.login(name, password)
      .then(() => {
        props.onLogin();
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  return (
    <div className="m-5  text-center">
      {!props.sessionExpired ? (
        <Fragment>
          <h2 className="display-4">Welcome</h2>
          <p style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>
            Please log in to view the content.
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <h5 className="display-5">Session expired.</h5>
          <p style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>
            Please log in again.
          </p>
        </Fragment>
      )}
      <Form className={styles.LoginForm} onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="username"
          value={name}
          placeholder="email"
          onChange={handleNameInputChange}
        />
        <Form.Control
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handlePasswordInputChange}
        />
        <Button type="submit">Log in</Button>
        <div style={{ color: "red" }}>{message}</div>
      </Form>
    </div>
  );
};

export default LoginForm;
