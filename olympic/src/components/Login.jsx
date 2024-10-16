import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importamos el contexto de autenticación

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Accedemos a la función de login desde el contexto
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/'); // Redirige al home si el login es exitoso
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container" style={{marginLeft:'2rem'}}>
      <h2 className="title">Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div className="field">
          <label className="label">Nombre de usuario</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div className="control">
          <button className="button is-primary" type="submit">
            <span className="icon">
              <i className="fas fa-sign-in-alt"></i>
            </span>
            <span>Iniciar sesión</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
