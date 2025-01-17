import React from 'react';

const MoviesList = ({ movies }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          
          color: 'white',
          backgroundColor: '#121212',
         gap: '3.5rem'
        }}
        className='py-5'
      >
        {movies.map((movie) => (
        <div key={movie.id} className="movie-card d-flex flex-column" style={{width: '300px'}}>
          <img src={movie.poster} alt={movie.title} style={{height: '350px', width: '100%'}} />
          <h5 className='mt-4'>{movie.title}</h5>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
      </div>
    );
  };

  export default MoviesList;