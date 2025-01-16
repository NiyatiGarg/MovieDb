import React from 'react';

// Header Component
const Header = () => {
    return (
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#2e2e2e',
          padding: '10px 20px',
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: '24px' }}>MovieDb</h1>
        <div>
          <input
            type="text"
            placeholder="Movie Name"
            style={{
              padding: '5px 10px',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </div>
      </header>
    );
  };
  