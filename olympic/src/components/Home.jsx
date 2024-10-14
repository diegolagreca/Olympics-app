import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GameCard from './GameCard';
import Button from './Button'; 

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    axios.get('http://localhost:3000/api/games')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  const deleteGame = (id) => {
    axios.delete(`http://localhost:3000/api/games/${id}`)
      .then(() => {
        fetchGames();
      })
      .catch((error) => {
        console.error("Error deleting game:", error);
      });
  };

  return (
    <div className="container" style={{ marginLeft: '2rem' }}>
      <h1 className="title">Gestión de Juegos Olímpicos</h1>
      <Link to="/add-game">
        <Button label="Agregar juego" />
      </Link>
      <div className="columns is-multiline">
        {games.map((game) => (
          <div className="column is-one-quarter" key={game.id}>
            <GameCard game={game} deleteGame={deleteGame} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
