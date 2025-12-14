import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SharedLayout from "../SharedLayout/SharedLayout";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";
import { ROUTES, RELATIVE_ROUTES } from "../../constants/routes";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={ROUTES.HOME} element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path={RELATIVE_ROUTES.MOVIES} element={<MoviesPage />} />
            <Route
              path={RELATIVE_ROUTES.MOVIE_DETAILS}
              element={<MovieDetailsPage />}
            >
              <Route path={RELATIVE_ROUTES.CAST} element={<MovieCast />} />
              <Route
                path={RELATIVE_ROUTES.REVIEWS}
                element={<MovieReviews />}
              />
            </Route>
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
