export const ROUTES = {
  HOME: "/",
  MOVIES: "/movies",
  MOVIE_DETAILS: "/movies/:movieId",
  NOT_FOUND: "*",
};

export const RELATIVE_ROUTES = {
  MOVIES: "movies",
  MOVIE_DETAILS: "movies/:movieId",
  CAST: "cast",
  REVIEWS: "reviews",
};

export const getMovieDetailsPath = (movieId) =>
  `/${RELATIVE_ROUTES.MOVIES}/${movieId}`;
export const getCastPath = (movieId) =>
  `/${RELATIVE_ROUTES.MOVIES}/${movieId}/${RELATIVE_ROUTES.CAST}`;
export const getReviewsPath = (movieId) =>
  `/${RELATIVE_ROUTES.MOVIES}/${movieId}/${RELATIVE_ROUTES.REVIEWS}`;
