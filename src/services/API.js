import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxYmUzOWQyNjk2ZWVmZjEyYjg5ZDkxNmE2Yzk4NCIsIm5iZiI6MTY3Mjk2Njk3Ny4xNzEsInN1YiI6IjYzYjc3MzQxNDMyNTBmMDA4MmU4ZmVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IDnfT6C7hi4Pwr4KkKI1HzFNYVyL2ZNiUVsD3EGSmZE";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

const Api = async (url = "") => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const ApiTrending = () => {
  return Api("trending/movie/day");
};

export const ApiByQuery = (searchQuery) => {
  return Api(
    `search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`
  );
};

export const CompleteInformationFilm = (id) => {
  return Api(`movie/${id}`);
};

export const CastFilm = (id) => {
  return Api(`movie/${id}/credits`);
};

export const ReviewsFilm = (id) => {
  return Api(`movie/${id}/reviews?language=en-US&page=1`);
};
