import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../../redux/user/user-operations";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const onLogin = (user) => dispatch(loginUser(user));
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPass(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onLogin({ email: email, password: password });
        setEmail("");
        setPass("");
        e.target.reset();
      }}
      className={style.form}
    >
      <Form.Group className={style.inputGroup} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className={style.inputGroup} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button className={style.inputGroup} variant="primary" type="submit">
        LogIn
      </Button>
    </Form>
  );
}
