import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Categories from './Categories';
import Button from './Button';
import BackButton from './BackButton';

const EditGame = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState('');
    const [categories, setCategories] = useState('Men');
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el juego actual para pre-rellenar el formulario
        axios.get(`http://localhost:3000/api/games/${id}`)
            .then((response) => {
                const game = response.data[0];
                setTitle(game.title);
                setDescription(game.description);
                setPlayers(game.players);
                setCategories(game.categories);
            })
            .catch((error) => {
                console.error("Error fetching game details:", error);
            });
    }, [id]);

    const updateGame = () => {
        if (title.trim() === '') {
            alert('El título es mandatorio.');
            return;
        }

        if (isNaN(players) || players <= 0) {
            alert('El número de jugadores debe ser un número mayor a 0.');
            return;
        }

        const updatedGame = { title, description, players, categories };
        axios.put(`http://localhost:3000/api/games/${id}`, updatedGame)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error updating game:", error);
            });
    };

    return (
        <div className="container" style={{ marginLeft: '2rem' }}>
            <BackButton />
            <h2 className="title">Editar Juego</h2>

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
                <Button label="Actualizar Juego" onClick={updateGame} />
            </div>
        </div>
    );
};

export default EditGame;
