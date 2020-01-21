import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "../layouts/main";

/** This is a custom route that will have the layout for the app */
const MainRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={componentProps => (
        <MainLayout>
          <Component {...componentProps} />
        </MainLayout>
      )}
    />
  );
};

export default MainRoute;
