import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const GameCard = ({ game, deleteGame }) => {
  // Función para manejar mensaje de confirmación de botón de eliminar
  const handleDelete = () => {
    const confirmed = window.confirm(`¿Estás seguro de que deseas eliminar el juego "${game.title}" permanentemente?`);

    if (confirmed) {
      deleteGame(game.id); // Si confirma, se elimina el juego
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{game.title}</p>
        <div className="buttons">
          <Link to={`/game/${game.id}`}>
            <Button label="Detalles" className="button is-info" />
          </Link>
          <Button label="Borrar" className="button is-danger" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;