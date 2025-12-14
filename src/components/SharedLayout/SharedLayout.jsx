import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
