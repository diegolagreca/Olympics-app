import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GameDetails from './components/GameDetails';
import AddGame from './components/AddGame';
import EditGame from './components/EditGame'; // Importar la vista de editar juego

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/add-game" element={<AddGame />} />
      <Route path="/edit-game/:id" element={<EditGame />} /> {/* Ruta para editar */}
    </Routes>
  );
}

export default App;
