import React from 'react';

const MoviesList = ({ movies }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          color: 'white',
        //   gap: '4rem'
        }}
      >
        {movies.map((movie) => (
        <div key={movie.id} className="movie-card d-flex flex-column mb-5" style={{width: '350px'}}>
          <img src={movie.poster} alt={movie.title} style={{height: '450px', width: '100%'}} />
          <h5 className='mt-4'>{movie.title}</h5>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
      </div>
    );
  };

  export default MoviesList;