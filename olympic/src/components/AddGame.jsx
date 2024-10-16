import React, { useState } from 'react';
import Categories from './Categories';
import AddGameButton from './AddGameButton'; 
import BackButton from './BackButton';

const AddGame = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState('');
    const [categories, setCategories] = useState('Men');

    return (
        <div className="container" style={{ marginLeft: '2rem' }}>
            <BackButton />
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
                <AddGameButton
                    title={title}
                    description={description}
                    players={players}
                    categories={categories}
                />
            </div>
        </div>
    );
};

export default AddGame;
