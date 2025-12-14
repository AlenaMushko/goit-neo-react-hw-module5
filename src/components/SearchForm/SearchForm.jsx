import { useState } from "react";
import { FcSearch } from "react-icons/fc";

import styles from "./SearchForm.module.css";

const SearchFilmsForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      return;
    }
    onSubmit(searchValue);
  };

  const handleNameChange = (e) => {
    let searchValueFilms = e.currentTarget.value.trim();
    setSearchValue(searchValueFilms.toLowerCase());
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <FcSearch style={{ width: "2.5em", height: "2.5em" }} />
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          value={searchValue}
          onChange={handleNameChange}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
      </form>
    </div>
  );
};

export default SearchFilmsForm;
