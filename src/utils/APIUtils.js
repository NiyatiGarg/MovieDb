const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch search results
export const fetchSearchResults = async (searchTerm, setTab) => {
  if (searchTerm.trim() === "") {
    setTab('popular');
    return await fetchMovies('popular');
  }

  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    setTab('search');
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch search results:", error);
  }
};

// Fetch movies based on active tab
export const fetchMovies = async (activeTab) => {
  let url = "";

  switch (activeTab) {
    case "popular":
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      break;
    case "upcoming":
      url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
      break;
    case "topRated":
      url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      break;
    default:
      url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }
};
