import { NavLink } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        to={ROUTES.HOME}
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.MOVIES}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
