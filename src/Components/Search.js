import React, { useEffect, useState } from 'react'
import ListCard from './ListCard.js'
import ErrorMessage from './ErrorMessage'; 
import { searchBlackIcon } from '../asset/icon/index.js';
import { play } from '../asset/icon/index.js'

const API_KEY = '574cf5f71934e72f9ea4dae5640ea158';
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a")

  const searchMovies = async (title) => {
        try {
          const response = await fetch(`${API_URL}&query=${title}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMovies(data.results); 
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      useEffect(() => {
        searchMovies(searchTerm);
      }, [searchTerm]);

      // just added
      const [error, setError] = useState(null);
      const handleButtonClick = async () => {
        try {
          // Simulate an API call that might throw an error
          throw new Error('An error occurred while fetching data.');
        } catch (error) {
          setError(error.message);
        }
      };
    
      const clearError = () => {
        setError(null);
      };

      //  i now see a reason for the search of the full movie title to be render when the search button is clicked, so we can render an error message, i have added an error message component thanks ro chatgpt
  return (
    <div>
      <div className='w-full h-[630px] pt-[22px] movie-background'>

        <div>
          <div className='text-white'>
            <div className=" flex justify-center">
              <input 
              style={{width:500, height:36, borderRadius:8, backgroundColor: 'transparent', paddingLeft: 10, color:'#fff' }}
              className='border-[2px] rounded-sm  '
              placeholder='What do you want to watch?' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img className='px-3 w-10 h-10 relative right-10 bottom-[2px] ' src={searchBlackIcon} alt="search" />
            </div>
              <h1 className='text-xl absolute right-[40px]'>Sign in</h1>
              <h4 className='text-2xl pl-[90px]'>Movie Discovery</h4>
          </div>
        </div>

        <datagrid>
          
        </datagrid>

        <div className='text-white pl-[5rem] pt-[6rem] justify-start'>
          <h4 className='text-4xl leading-9'>John Wick 3: Parabellum</h4>
          <p>
            <span>97%</span> 
            <span> 86/100</span>
          </p>
          <p className="overflow-hidden">
          John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
          </p>

          <div className=" flex">
          <img src={play} alt="play icon" className="w-8 mt-6  relative left-10" />
            <p className='text-transform: uppercase border-5 h-9 mt-6 px-10 pt-1 text-bold rounded-lg bg-red-600'>
            watch trailer
            </p>
          </div>
        </div>
        
        {/* <div className=" flex justify-center">
          <input 
          style={{width:500, height:36, borderRadius:8, backgroundColor: 'transparent', paddingLeft: 10, color:'#fff' }}
          className='border-[2px] rounded-sm  '
          placeholder='What do you want to watch?' 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img className='px-3 w-10 h-10 relative right-10 bottom-[2px] ' src={searchBlackIcon} alt="search" />
      </div> */}
    </div>
    
    {/* this part is correct, but we need to that renders the search movie if it exist in the api database  */}

      <div className='bg-[#fff] '>
    {movies.length > 0 ? (
        <div className='grid grid-cols-4 gap-20 px-20 text-[#000] '>
          {movies?.map((movie) => (
            <ListCard key={movie.title} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found</h2>
        </div>
      )}
      </div>

      {/* just added */}
      <div>
      <button onClick={handleButtonClick}>Trigger Error</button>
      {error && <ErrorMessage message={error} onClose={clearError} />}
    </div>


    </div>
  )
}

export default Search
