import React from 'react';
import { Route } from 'react-router-dom';

interface Props {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({ component: Component, ...otherProps }: Props) => (
  <>
    <header>Logged In header.</header>
    <Route
      render={() => (
        <>
          <Component {...otherProps} />
        </>
      )}
    />
    <footer>Logged In Footer.</footer>
  </>
);

export default LoggedInRoute;
