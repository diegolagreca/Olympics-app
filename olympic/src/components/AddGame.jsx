import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';
import Button from './Button';

const AddGame = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState('');
    const [categories, setCategories] = useState('Men');
    const navigate = useNavigate();

    const addGame = () => {
        // Validar que cantidad sea un número y sea mayor a 0
        if (isNaN(players) || players <= 0) {
            alert('El número de jugadores debe ser un número mayor a 0.');
            return;
        }

        // Validar que el título no esté vacío
        if (title.trim() === '') {
            alert('El título es mandatorio.');
            return;
        }

        const newGame = { title, description, players, categories };
        axios.post('http://localhost:3000/api/games', newGame)
            .then(() => {
                navigate('/');  // Redirige al Home después de agregar el juego
            })
            .catch((error) => {
                console.error("Error adding game:", error);
            });
    };

    return (
        <div className="container" style={{ marginTop: '2rem', marginLeft: '2rem' }}>

            <Button label="Ir atrás" className="button is-link" onClick={() => navigate(-1)} />

            <h2 className="title">Agregar un Nuevo Juego</h2>

            <div className="columns is-variable is-8 is-multiline">
                <div className="column is-full-tablet is-half-desktop">
                    <div className="field">
                        <label className="label">Título</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Nombre del juego"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Descripción</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Descripción del juego"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="column is-full-tablet is-half-desktop">
                    <div className="field">
                        <label className="label">Número de jugadores</label>
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value={players}
                                onChange={(e) => setPlayers(e.target.value)}
                                placeholder="Número de jugadores"
                                min="1"
                            />
                        </div>
                    </div>

                    <Categories value={categories} onChange={(e) => setCategories(e.target.value)} />
                </div>
            </div>

            <div className="control">
                <Button label="Agregar Juego" onClick={addGame} />
            </div>
        </div>
    );
};

export default AddGame;
