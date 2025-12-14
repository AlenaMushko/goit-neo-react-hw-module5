import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.notFoundTitle}>Error, something went wrong</h2>
      <Link to={ROUTES.HOME} className={styles.homeLink}>
        Go to home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
