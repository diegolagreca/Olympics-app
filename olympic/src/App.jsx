import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import GameDetails from './components/GameDetails';
import AddGame from './components/AddGame';
import EditGame from './components/EditGame';
import Login from './components/Login';
import { AuthProvider, useAuth } from './components/AuthContext';
import Header from './components/Header'; // Header con Log Off

// Componente para manejar la redirección si no está autenticado
const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/game/:id"
          element={
            <RequireAuth>
              <GameDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/add-game"
          element={
            <RequireAuth>
              <AddGame />
            </RequireAuth>
          }
        />
        <Route
          path="/edit-game/:id"
          element={
            <RequireAuth>
              <EditGame />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
