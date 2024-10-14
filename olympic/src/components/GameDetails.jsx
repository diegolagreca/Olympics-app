import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/games/${id}`)
      .then((response) => {
        setGame(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching game details:", error);
      });
  }, [id]);

  return (
    <div className="container" style={{ marginTop: '2rem', marginLeft: '2rem', marginBottom: '2rem' }}>
      {game ? (
        <>
          <Button label="Ir atrás" className="button is-link" onClick={() => navigate(-1)} />
          <div className="box">

            <h1 className="title is-3">{game.title}</h1>

            <div className="content">
              <p className="subtitle is-5"><strong>Descripción:</strong></p>
              <p>{game.description}</p>

              <p className="subtitle is-5"><strong>Jugadores:</strong></p>
              <p>{game.players}</p>

              <p className="subtitle is-5"><strong>Categorías:</strong></p>
              <p>{game.categories}</p>
            </div>
          </div>

        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default GameDetails;

