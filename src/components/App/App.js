import React, { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../../services/routes";
import { getCurrentUser } from "../../redux/user/user-operations";
import PrivateRoute from "../AppBar/PrivateRoute";
import PublicRoute from "../AppBar/PublicRoute";
import AppBar from "../AppBar/AppBar";
import "./App.css";

const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Switch>
          <PublicRoute path={routes.registerPage} component={RegisterPage} />
          <PublicRoute path={routes.loginPage} component={LoginPage} />
          <PrivateRoute path={routes.contactsPage} component={Contacts} />
          <Redirect to={routes.loginPage} />
        </Switch>
      </Suspense>
    </>
  );
}
