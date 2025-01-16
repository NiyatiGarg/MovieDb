import React from 'react';

// MovieCard Component
const MovieCard = ({ title, rating, poster }) => {
  return (
    <div
      style={{
        width: '200px',
        margin: '10px',
        padding: '10px',
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <img
        src={poster}
        alt={title}
        style={{
          width: '100%',
          borderRadius: '8px',
          marginBottom: '10px',
        }}
      />
      <h3 style={{ fontSize: '16px', marginBottom: '5px' }}>{title}</h3>
      <p style={{ fontSize: '14px' }}>Rating: {rating}</p>
    </div>
  );
};