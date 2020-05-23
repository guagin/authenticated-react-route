import React from 'react';
import { authenticate } from '../../store/current/action';
import { connect } from 'react-redux';

interface Props {
  authenticateConnect: () => void;
}

const LogIn = ({ authenticateConnect }: Props) => (
  <>
    <p>Login Page</p>
    <button onClick={authenticateConnect}> log me in </button>
  </>
);

const mapDispatchToProps = {
  authenticateConnect: authenticate,
};

export default connect(null, mapDispatchToProps)(LogIn);
