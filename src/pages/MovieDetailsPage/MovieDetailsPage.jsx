import { useState, useEffect, useRef } from "react";
import { useLocation, useParams, NavLink, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

import Loader from "../../components/Loader/Loader";
import { CompleteInformationFilm } from "../../services/API";
import FilmCard from "../../components/FilmCard/FilmCard";
import BackLink from "../../components/BackLink/BackLink";
import { ROUTES } from "../../constants/routes";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHrefRef = useRef(
    location.state?.from?.pathname ?? location.state?.from ?? ROUTES.MOVIES
  );
  const { movieId } = useParams();
  const [infoAboutFilm, setInfoAboutFilm] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    CompleteInformationFilm(movieId)
      .then((resolve) => {
        setInfoAboutFilm(resolve.data);
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Try again");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <main>
      <div className={styles.movieDetailsContainer}>
        {isLoading && <Loader />}
        <BackLink to={backLinkHrefRef.current}>Go back</BackLink>
        {infoAboutFilm && <FilmCard film={infoAboutFilm} />}

        <div className={styles.navLinksWrapper}>
          <NavLink
            to="cast"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cast
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Reviews
          </NavLink>
        </div>

        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetailsPage;
