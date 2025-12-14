import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { ApiTrending } from "../../services/API";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const FetchTrending = async () => {
      try {
        const films = await ApiTrending();
        setFilms(films.data.results);
      } catch (error) {
        toast.error(error.message || "Something went wrong. Try again");
      } finally {
        setIsLoading(false);
      }
    };
    FetchTrending();
  }, []);

  return (
    <main>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Trending today</h1>
        {isLoading && <Loader />}
        {films && films.length > 0 && <MovieList films={films} />}
      </div>
    </main>
  );
};

export default HomePage;
