import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ContactsList.module.css";

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const deleteContacts = (contactId) => dispatch(deleteContact(contactId));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListGroup className={style.contactsList}>
      {contacts.map((el) => {
        return (
          <ListGroup.Item className={style.contactsListItem} key={el.id}>
            <p>
              {el.name} : {el.number}
            </p>
            <Button
              className={style.deleteButton}
              variant="primary"
              onClick={() => deleteContacts(el.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
