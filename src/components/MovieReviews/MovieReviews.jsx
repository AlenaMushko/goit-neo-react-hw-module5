import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import { ReviewsFilm } from "../../services/API";
import { FcReadingEbook } from "react-icons/fc";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ReviewsFilm(movieId)
      .then((resolve) => {
        setReviews(resolve.data.results);
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

  if (!reviews || reviews.length === 0) {
    return <p>Sorry, there is no information</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={styles.reviewItem}>
          <h2>
            <FcReadingEbook size="40" />
            Author: <span className={styles.reviewAuthor}>{author}</span>
          </h2>
          <h3>Reviews</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
