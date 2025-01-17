import React from 'react';

// Header Component
const Header = ({  searchTerm, setSearchTerm, activeTab, onTabChange }) => {
    return (
      <header
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#2e2e2e',
          color: '#fff',
          paddingLeft: '5rem',
          paddingRight: '5rem'
        }}
        className='py-4 d-flex'
      >
        <h1 style={{ fontSize: '24px' }}>MovieDb</h1>

        
      <div className="d-flex gap-2 align-items-center">
        {/* tabs */}
        <div
          className={`p-2 ${activeTab === 'popular' ? 'activeTab' : ''}`}
          onClick={() => onTabChange('popular')}
        >
          Popular
        </div>
        <div
          className={`p-2 ${activeTab === 'upcoming' ? 'activeTab' : ''}`}
          onClick={() => onTabChange('upcoming')}
        >
          Upcoming
        </div>
        <div
          className={`p-2 ${activeTab === 'topRated' ? 'activeTab' : ''}`}
          onClick={() => onTabChange('topRated')}
        >
          Top Rated
        </div>
         {/* Movie searchBar */}
        <input
            type="text"
            placeholder="Movie Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '5px 10px',
            //   marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <div style={{borderRadius: '5px', background: 'grey', padding: '5px 10px'}} >Search</div>
      </div>
      </header>
    );
  };

  export default Header;
  