import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import Loader from "../../components/Loader/Loader";
import { ApiByQuery } from "../../services/API";
import SearchFilmsForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams("");
  const filmName = searchParams.get("query");

  useEffect(() => {
    if (!filmName) {
      return;
    }

    setIsLoading(true);
    setIsEmpty(false);

    ApiByQuery(filmName)
      .then((resolve) => {
        let result = resolve.data.results;
        if (result.length < 1) {
          setIsEmpty(true);
          setFilms(null);
        } else {
          setFilms(result);
          setIsEmpty(false);
        }
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filmName]);

  const handleFormSubmit = (filmName) => {
    const nextFilmName = filmName !== "" ? { query: filmName } : {};
    setSearchParams(nextFilmName);
    setFilms(null);
  };

  return (
    <main>
      <SearchFilmsForm onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {films && films.length > 0 && <MovieList films={films} />}
      {isEmpty && (
        <div className={styles.noFilms}>
          Sorry, we did not find a movie with the title{" "}
          <span className={styles.filmName}>{filmName}</span>
        </div>
      )}
    </main>
  );
};

export default MoviesPage;
