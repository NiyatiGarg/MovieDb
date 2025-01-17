import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './subComponents/Header';
import MoviesList from './subComponents/MoviesList';

import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allMovies, setAllMovies] = useState([]); // Store all movies fetched
  const [movies, setMovies] = useState([]); // Paginated movies
  const [activeTab, setActiveTab] = useState('popular');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6; // Movies per page

  // Fetch movies based on active tab
  const fetchMovies = async () => {
    setLoading(true);
    let url = '';

    switch (activeTab) {
      case 'popular':
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        break;
      case 'upcoming':
        url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
        break;
      case 'topRated':
        url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
        break;
      default:
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllMovies(data.results || []); // Store all fetched movies
      setCurrentPage(1); // Reset to the first page
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch search results
  const fetchSearchResults = async () => {
    if (searchTerm.trim() === '') {
      fetchMovies();
      return;
    }

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllMovies(data.results || []);
      setCurrentPage(1);
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  };
  
  // Paginate movies
  const paginateMovies = () => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    setMovies(allMovies.slice(startIndex, endIndex)); // Set movies for the current page
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm('');
    setCurrentPage(1); // Reset page on tab change
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > Math.ceil(allMovies.length / moviesPerPage)) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchMovies();
  }, [activeTab]);

  useEffect(() => {
    paginateMovies();
  }, [allMovies, currentPage]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      fetchMovies();
    } else {
      fetchSearchResults();
    }
  }, [activeTab, searchTerm]);

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <MoviesList
            movies={movies.map((movie) => ({
              ...movie,
              poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
            }))}
          />
          {/* Pagination Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
              gap: '1rem',
            }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="btn btn-primary"
            >
              Previous
            </button>
            <span style={{ fontSize: '1.2rem' }}>
              Page {currentPage} of {Math.ceil(allMovies.length / moviesPerPage)}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(allMovies.length / moviesPerPage)}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
