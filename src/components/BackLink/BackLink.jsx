import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import styles from "./BackLink.module.css";

const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.backLink}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

export default BackLink;
