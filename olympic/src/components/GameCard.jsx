import React from 'react';
import DetailsButton from './DetailsButton';
import DeleteButton from './DeleteButton';
import EditGameButton from './EditGameButton';
import { useAuth } from './AuthContext'; // Importamos el contexto de autenticación

const GameCard = ({ game, deleteGame }) => {
  const { userRole } = useAuth(); // Accedemos al rol del usuario

  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{game.title}</p>
        <div className="buttons">
          <DetailsButton gameId={game.id} />
          {userRole === 'admin' && (
            <>
              <EditGameButton gameId={game.id} /> {/* Solo muestra si es admin */}
              <DeleteButton onDelete={() => deleteGame(game.id)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
