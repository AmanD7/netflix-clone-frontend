const API_key="524d86e3035fdc4aac9c8d65ed794dfa";

const request={
  fetchTrending: `/trending/all/week?api_key=${API_key}`,
fetchNetflixOrignals:`/discover/tv?api_key=${API_key}&with_networks=213`,
fetchTopRated:`/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
fetchActionMovies:`/discover/movie?api_key=${API_key}&with_genres=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_key}&with_genres=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_key}&with_genres=99`,
}
export default request;