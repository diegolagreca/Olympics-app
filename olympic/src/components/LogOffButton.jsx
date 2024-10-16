import React from 'react';
import { useAuth } from './AuthContext';

const LogOffButton = () => {
  const { logout } = useAuth();

  return (
    <button className="button is-light" onClick={logout}>
      <span className="icon">
        <i className="fas fa-sign-out-alt"></i>
      </span>
      <span>Log Off</span>
    </button>
  );
};

export default LogOffButton;
