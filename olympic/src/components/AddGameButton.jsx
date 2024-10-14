import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGameButton = ({ title, description, players, categories }) => {
    const navigate = useNavigate();

    const addGame = () => {
        // Validar título y número de jugadores
        if (title.trim() === '') {
            alert('El título es mandatorio.');
            return;
        }

        if (isNaN(players) || players <= 0) {
            alert('El número de jugadores debe ser un número mayor a 0.');
            return;
        }

        // Lógica para agregar el juego
        const newGame = { title, description, players, categories };
        axios.post('http://localhost:3000/api/games', newGame)
            .then(() => {
                navigate('/');  // Redirige a la página principal
            })
            .catch((error) => {
                console.error("Error al agregar el juego:", error);
            });
    };

    return (
        <button className="button is-primary" onClick={addGame}>
        <span className="icon">
          <i className="fas fa-plus-circle"></i>
        </span>
        <span>Agregar Juego</span>
      </button>
      );
};

export default AddGameButton;
