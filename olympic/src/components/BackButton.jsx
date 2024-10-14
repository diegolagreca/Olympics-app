import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="button is-link" onClick={() => navigate(-1)} style={{ marginBottom: '2rem' }}>
      <span className="icon">
        <i className="fas fa-arrow-left"></i>
      </span>
      <span>Ir Atrás</span>
    </button>

  );
};

export default BackButton;