import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, userRole } = useAuth();

  // Si el usuario no está autenticado, redirigimos al login
  if (!isAuthenticated || userRole !== 'admin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
