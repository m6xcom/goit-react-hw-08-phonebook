import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";
import { addContact } from "../../redux/contacts/contacts-operations";
import { getContacts } from "../../redux/contacts/contacts-selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ContactForm.module.css";

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const addContacts = (user) => dispatch(addContact(user));
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <Form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          contacts.every((el) => el.name.toLowerCase() !== name.toLowerCase())
        ) {
          addContacts({
            id: shortid.generate(),
            name: name,
            number: number,
          });
        } else {
          alert(`${name} is already in contacts.`);
        }
        e.target.reset();
      }}
    >
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="name"
          type="name"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group controlId="formBasicPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          onChange={handleChange}
          name="number"
          type="tel"
          placeholder="Phone number"
        />
      </Form.Group>
      <Button className={style.addContactBtn} variant="primary" type="submit">
        Add contact
      </Button>
    </Form>
  );
}
