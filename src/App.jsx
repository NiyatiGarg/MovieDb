import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const movies = [
    {
      title: 'Venom: Let There Be Carnage',
      rating: '7.2',
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2VmNjZkZTgtMjk0Zi00NTFlLWIxN2QtNjhlYmYwMjU4YmM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Red Notice',
      rating: '6.8',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZTllNjk0YTgtMzMwMi00YjlhLWIyNjEtNTJiNWRmNWE4MTcyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    },
    {
      title: 'Clifford the Big Red Dog',
      rating: '7.6',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmFiMTY3ZmItMzZjOC00NTc1LWExMDktOTcyZjljZjBlMzA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    },
    {
      title: 'Shang-Chi and the Legend of the Ten Rings',
      rating: '7.8',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMmM2MjM2ODMtNzc5Mi00NjkxLTk2MWMtNjI4ZjY2OTYxYmQ3XkEyXkFqcGdeQXVyMTM2ODUyNzQ3._V1_FMjpg_UX1000_.jpg',
    },
  ];

  return (
    <div>
      <Header />
      <MoviesList movies={movies} />
    </div>
  );
};

export default App
