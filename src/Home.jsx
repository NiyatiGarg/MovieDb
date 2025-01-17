import React, { useState, useEffect } from "react";

import "./App.css";
import MoviesList from "./subComponents/MoviesList";

import "bootstrap/dist/css/bootstrap.min.css";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { useSelector } from "react-redux";

const moviesPerPage = 6; // Movies per page, we can keep this in API call also if BE supports
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Home({ loading }) {
  const activeTab = useSelector((state) => state.movies.activeTab);
  const allMovies = useSelector((state) => state.movies[activeTab] || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    paginateMovies();
  }, [allMovies, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > Math.ceil(allMovies.length / moviesPerPage)) return;
    setCurrentPage(page);
  };

  // Paginate movies
  const paginateMovies = () => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    setMovies(allMovies?.slice(startIndex, endIndex) || []); // Set movies for the current page
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="py-5" style={{ margin: "0 5rem" }}>
          <MoviesList
            movies={movies.map((movie) => ({
              ...movie,
              poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
            }))}
          />
          {/* Pagination Controller */}
          <div
            style={{
              margin: "2rem 0 0 0",
              gap: "1rem",
            }}
            className="d-flex justify-content-end align-items-center"
          >
            <span style={{ fontSize: "1.2rem" }}>
              Page {currentPage} of{" "}
              {Math.ceil(allMovies.length / moviesPerPage)}
            </span>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="py-1 px-2"
              style={{ background: "white", borderRadius: "5px" }}
            >
              {/* Previous */}
              <GrCaretPrevious />
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(allMovies.length / moviesPerPage)
              }
              className="py-1 px-2"
              style={{ background: "white", borderRadius: "5px" }}
            >
              {/* Next */}
              <GrCaretNext />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
