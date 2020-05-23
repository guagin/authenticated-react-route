import React from 'react';
import { unauthenticate } from '../../store/current/action';
import { connect } from 'react-redux';

interface Props {
  unauthenticateConnect: () => void;
}

const LogOut = ({ unauthenticateConnect }: Props) => (
  <>
    <p>Logout page</p>
    <button onClick={unauthenticateConnect}>log me out</button>
  </>
);

const mapDispatchToProps = {
  unauthenticateConnect: unauthenticate,
};

export default connect(null, mapDispatchToProps)(LogOut);
