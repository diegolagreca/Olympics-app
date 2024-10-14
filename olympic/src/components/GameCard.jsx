import React from 'react';
import DetailsButton from './DetailsButton';
import DeleteButton from './DeleteButton';
import EditGameButton from './EditGameButton'; 

const GameCard = ({ game, deleteGame }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{game.title}</p>
        <div className="buttons">
          <DetailsButton gameId={game.id} />
          <EditGameButton gameId={game.id} /> 
          <DeleteButton onDelete={() => deleteGame(game.id)} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
