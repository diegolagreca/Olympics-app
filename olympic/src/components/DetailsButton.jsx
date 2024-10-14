import React from 'react';
import { Link } from 'react-router-dom';

const DetailsButton = ({ gameId }) => {
  return (
    <Link to={`/game/${gameId}`}>
      <button className="button is-info">
        <span className="icon">
          <i className="fas fa-info-circle"></i>
        </span>
        <span>Detalles</span>
      </button>
    </Link>
  );
};

export default DetailsButton;
