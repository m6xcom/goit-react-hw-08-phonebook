import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import shortid from "shortid";
import { FILTERCHANGE } from "../../redux/contacts/contacts-actions";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filterChange = (filter) => dispatch(FILTERCHANGE(filter));
  const filterInput = shortid.generate();
  return (
    <Form.Group>
      <Form.Label className={style.title}>Find contacts by name</Form.Label>
      <Form.Control
        id={filterInput}
        type="text"
        onChange={(e) => {
          filterChange(e.target.value.toLowerCase());
        }}
        name="filter"
      ></Form.Control>
    </Form.Group>
  );
}
