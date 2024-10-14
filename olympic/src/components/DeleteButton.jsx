import React from 'react';

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este juego permanentemente?")) {
      onDelete();
    }
  };

  return (
    <button className="button is-danger" onClick={handleDelete}>
      <span className="icon">
        <i className="fas fa-trash"></i>
      </span>
      <span>Borrar</span>
    </button>
  );
};

export default DeleteButton;
