import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/user/user-selectors";

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
