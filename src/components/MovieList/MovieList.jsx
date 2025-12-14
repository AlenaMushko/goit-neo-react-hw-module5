import { Link, useLocation } from "react-router-dom";

import { getMovieDetailsPath } from "../../constants/routes";
import noPhoto from "../../assets/noPhoto.png";
import styles from "./MovieList.module.css";

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieList}>
        {films?.map(({ id, poster_path, title, vote_average }) => (
          <li key={id} className={styles.movieItem}>
            <Link
              to={getMovieDetailsPath(id)}
              state={{ from: location }}
              className={styles.movieLink}
            >
              <img
                className={styles.moviePoster}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noPhoto
                }
                alt={title}
              />
              <h3 className={styles.movieTitle}>{title}</h3>
              <div className={styles.movieRating}>
                {vote_average.toFixed(1)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
