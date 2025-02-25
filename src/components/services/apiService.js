const BASE_URL = 'https://imdb232.p.rapidapi.com';
const API_HEADERS = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'imdb232.p.rapidapi.com'
  }
};

// Fetch Most Popular Movies
export const fetchPopularMovies = async () => {
  try {
    const url = `${BASE_URL}/api/title/get-most-popular?limit=20&topMeterTitlesType=ALL`;
    const response = await fetch(url, API_HEADERS);
    const json = await response.json();

    const moviesData = json.data.topMeterTitles.edges.map((item) => ({
      id: item.node.id,
      title: item.node.titleText.text,
      url: item.node.primaryImage
        ? item.node.primaryImage.url
        : "https://via.placeholder.com/300x450?text=No+Image",
      release_date: item.node.releaseYear
        ? item.node.releaseYear.year
        : "N/A",
    }));

    return moviesData;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};
