import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GameDetails from './components/GameDetails';
import AddGame from './components/AddGame';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/add-game" element={<AddGame />} />
    </Routes>
  );
}

export default App;
