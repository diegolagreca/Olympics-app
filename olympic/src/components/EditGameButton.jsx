import React from 'react';
import { Link } from 'react-router-dom';

const EditGameButton = ({ gameId }) => {
  return (
    <Link to={`/edit-game/${gameId}`}>
      <button className="button is-warning">
        <span className="icon">
          <i className="fas fa-edit"></i>
        </span>
        <span>Editar</span>
      </button>
    </Link>
  );
};

export default EditGameButton;
