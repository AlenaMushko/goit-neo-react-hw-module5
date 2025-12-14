import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { CastFilm } from "../../services/API";
import Loader from "../Loader/Loader";
import noPhoto from "../../assets/noPhoto.png";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    CastFilm(movieId)
      .then((resolve) => {
        setCast(resolve.data.cast);
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Try again");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!cast || cast.length === 0) {
    return <p>Sorry, there is no information</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, character, original_name, profile_path }) => (
        <li key={id} className={styles.castItem}>
          <div className={styles.castWrapper}>
            <img
              className={styles.castImage}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : noPhoto
              }
              alt={original_name}
            />
            <div>
              <h2>{original_name}</h2>
              <p>
                Character:{" "}
                <span className={styles.castCharacter}>{character}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
