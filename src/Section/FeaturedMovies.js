import React, { useEffect, useState } from "react";
import MovieCard from "../Section/MovieCard";
import { rightArrow } from "../asset/icon/index.js";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = "574cf5f71934e72f9ea4dae5640ea158";
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`;

  useEffect(() => {
    try {
      const headers = new Headers();
      const requestOptions = {
        method: "GET",
        headers: headers,
      };
      fetch(`${API_URL}`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setMovies(data.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between mt-[60px]">
        <p className="text-[42px] font-semibold pl-[70px]">Featured Movie</p>
        <a href="/">
          <span className="text-red-600">See more</span>
          <img
            src={rightArrow}
            alt="Right Arrow"
            className="ml-2 text-red-600"
          />
        </a>
      </div>
      <div className="bg-[#fff]">
        {movies.length > 0 ? (
          <div className="grid grid-cols-4 gap-20 px-20 text-[#000] ">
            {movies?.map((movie) => (
              <Link to={`/${movie.id}`}>
                <MovieCard key={movie.title} movie={movie} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
      <Routes>
        <Route path={`/:movieId`} element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
};
export default FeaturedMovies;
