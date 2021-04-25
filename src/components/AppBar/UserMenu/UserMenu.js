import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmail } from "../../../redux/user/user-selectors";
import { logoutUser } from "../../../redux/user/user-operations";
import style from "./UserMenu.module.css";

export default function UserMenu() {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutUser());
  return (
    <div className={style.userMenu}>
      <div className={style.user}>
        <h1>{email}</h1>
        <button onClick={onLogout}>LogOut</button>
      </div>
    </div>
  );
}
