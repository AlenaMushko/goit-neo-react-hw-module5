import { NavLink } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to={ROUTES.HOME}
        end
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.MOVIES}
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
