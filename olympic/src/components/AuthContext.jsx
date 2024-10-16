import React, { createContext, useState, useContext } from 'react';

// Crear un contexto de autenticación
const AuthContext = createContext();

// Lista de usuarios predefinidos
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user1', password: 'password1', role: 'user' },
  { username: 'user2', password: 'password2', role: 'user' },
];

// Crear un proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    const foundUser = users.find((user) => user.username === username && user.password === password);

    if (foundUser) {
      setIsAuthenticated(true);
      setUserRole(foundUser.role);
      setCurrentUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Crear un hook personalizado para acceder al contexto
export const useAuth = () => useContext(AuthContext);
