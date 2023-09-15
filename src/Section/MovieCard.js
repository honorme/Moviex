import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie'>
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : 'https://via.placeholder.com/400'
          }
          alt={movie.title}
        />
      </div>
      <span>{movie.media_type}</span>
      <h3>{movie.title}</h3>
    </div>
  );
};
// network thanks to my dad's call
export default MovieCard;



// expectation for Movie Details:
// When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
// I should see
// title - [data-testid: movie-title]
// release date (in UTC) - [data-testid: movie-release-date]
// runtime (in minutes) - [data-testid: movie-runtime]
// overview - [data-testid: movie-overview]


// import React from 'react';

// const MovieDetails = ({ match }) => {
//   // Get the movie ID from the route parameters
//   const { id } = match.params;

//   // Simulate movie data (replace this with fetching data from an API)
//   const movie = {
//     id: id,
//     title: 'Movie Title',
//     release_date: '2023-09-20',
//     runtime: 120,
//     overview: 'This is a brief overview of the movie.',
//   };

//   return (
//     <div>
//       <h1 data-testid="movie-title">{movie.title}</h1>
//       <p data-testid="movie-release-date">Release Date (UTC): {movie.release_date}</p>
//       <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
//       <p data-testid="movie-overview">Overview: {movie.overview}</p>
//     </div>
//   );
// };

// export default MovieDetails;
