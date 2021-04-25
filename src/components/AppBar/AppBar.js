import React from "react";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import { isAuth } from "../../redux/user/user-selectors";
import style from "./AppBar.module.css";

export default function AppBar() {
  const isAuthenticated = useSelector(isAuth);
  return (
    <header className={style.nav}>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
