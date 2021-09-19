import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button } from "react-bootstrap";
import styles from "./LoginForm.module.css";
import AuthCommunicator from "../services/AuthCommunicator";

const LoginForm = (props) => {
  let history = useHistory();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const loginAndRedirect = (path) => {
    props.onLogin();
    history.push(path);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    AuthCommunicator.login(name, password, loginAndRedirect, [
      props.redirectPath,
    ]).catch((error) => {
      setMessage(error.message);
    });
  };

  return (
    <div className="m-5  text-center">
      <h2 className="display-4">Welcome</h2>
      <p style={{ fontSize: "1.1rem", fontWeight: "lighter" }}>
        Please log in to view the content.
      </p>
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
