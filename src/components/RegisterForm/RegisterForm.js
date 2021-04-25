import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { registerUser } from "../../redux/user/user-operations";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const onRegister = (user) => dispatch(registerUser(user));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
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
        onRegister({ name: name, email: email, password: password });
        setName("");
        setEmail("");
        setPass("");
        e.target.reset();
      }}
      className={style.form}
    >
      <Form.Group className={style.inputGroup} controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="name"
          name="name"
          placeholder="Enter your name"
        />
      </Form.Group>
      <Form.Group className={style.inputGroup} controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className={style.inputGroup} controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button className={style.inputGroup} variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}
