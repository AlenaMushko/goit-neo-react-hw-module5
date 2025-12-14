import noPhoto from "../../assets/noPhoto.png";
import styles from "./FilmCard.module.css";

const FilmCard = ({ film }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    film;
  const releaseYear = release_date ? release_date.split("-")[0] : "";
  const genresName = genres ? genres.map((genre) => genre.name).join(", ") : "";

  return (
    <div className={styles.filmCardWrapper}>
      <img
        className={styles.filmCardImage}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : noPhoto
        }
        alt={title}
      />
      <div className={styles.filmCardInfo}>
        <h1 className={styles.filmCardTitle}>
          {title} {releaseYear && `(${releaseYear})`}
        </h1>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresName || "No genres available"}</p>
      </div>
    </div>
  );
};

export default FilmCard;
