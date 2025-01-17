import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './subComponents/Header';
import MovieDetailPage from './subComponents/MovieDetail';
import HomePage from './Home';
import { fetchMovies, fetchSearchResults } from './utils/APIUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, setMovies } from './movieSlice';

const App = React.memo(() => {
  const [searchTerm, setSearchTerm] = useState('');
  const activeTab = useSelector(state => state.movies.activeTab);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (searchTerm.trim() === '') {
      fetchMovies(activeTab)
      .then((movies) => {
        dispatch(setMovies({activeTab, movies}))
      })
      .finally(() => setLoading(false));
    } else {
      fetchSearchResults(searchTerm, (tab) => dispatch(setActiveTab(tab))).then((movies) => {
        dispatch(setMovies({activeTab, movies}))
      })
      .finally(() => setLoading(false));;
    }
  }, [activeTab, searchTerm]);

  return (
    <Router>
    <div style={{ width: '100vw', height: '100vh', background: 'rgb(135, 147, 159)', overflow :'scroll'}}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
          <Route exact path="/" element={<HomePage loading={loading}/>} />
          <Route path="/popular" element={<HomePage loading={loading}/>} />
          <Route path="/upcoming" element={<HomePage loading={loading}/>} />
          <Route path="/topRated" element={<HomePage loading={loading}/>} />
          <Route path="/movie/:id/:name" element={<MovieDetailPage />} />
        </Routes>
    </div>
    </Router>
  );
});

export default App;
