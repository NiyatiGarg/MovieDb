import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    // Fetch movie cast
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setCast(data.cast || []);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchMovieDetails();
    fetchCast();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-start">
        <a href="/" style={{ textDecoration: "none", margin: "0 5rem 0 4rem" }}>
          <IoIosArrowRoundBack style={{ fontSize: "4rem" }} />
        </a>
      </div>
      <div style={{ color: "white" }}>
        {/* Card */}
        <div
          className="p-4"
          style={{
            borderRadius: "5px",
            background: "rgba(2, 10, 22, 0.69)",
            margin: "0 5rem 0 5rem",
          }}
        >
          <div style={{ display: "flex", gap: "2rem" }}>
            <img
              src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
              style={{ height: "450px", width: "300px" }}
            />
            <div className="d-flex flex-column justify-content-start text-start gap-4">
              <h2 style={{ fontSize: "3rem" }}>{movieDetails.title}</h2>

              <p>
                <strong>Rating:</strong> {movieDetails.vote_average}
              </p>
              <div className="d-flex gap-2">
                {movieDetails.genres.map((genre) => (
                  <p key={genre.name}>{genre.name}</p>
                ))}
              </div>
              <p>
                <strong>Release Date:</strong> {movieDetails.release_date}
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="text-start">Overview</h1>
            <p className="text-start">{movieDetails.overview}</p>
          </div>
        </div>
        {/* Cast */}
<div style={{ margin: "0 5rem 0 5rem",}}>
<h3 className="mt-5">Cast</h3> 
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-between'}}> 
          {cast.map((actor) => (
            <div key={actor.id} style={{ width: "300px", textAlign: "center" , marginBottom:'2rem'}}>
              <img
                src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                alt={actor.name}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <p>{actor.name}</p>
              <p style={{ fontSize: "0.9rem" }}>Character: {actor.character}</p>
            </div>
          ))}
        </div>
</div>
       
      </div>
    </>
  );
};

export default MovieDetail;
