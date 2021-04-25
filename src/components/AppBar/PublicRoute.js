import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/user/user-selectors";

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Redirect to="/contacts" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
