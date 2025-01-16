import React from 'react';

const MoviesList = ({ movies }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#121212',
        }}
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </div>
    );
  };