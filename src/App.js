import React from 'react';
import './App.css';
import HomePage from './Section/HomePage';
import { Routes, Route, Link } from 'react-router-dom';
import MovieCard from './Section/MovieCard';


const App = () => {
  return (
    <>
    <HomePage />
      {/* <Routes>
      <Route path="/MovieCard" element={<MovieCard />} />
    </Routes> */}
    </>
  );
}

export default App;