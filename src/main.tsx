import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage.tsx";
import MainLayout from "./Layouts/MainLayout/MainLayout.tsx";
import SigninPage from "./pages/SigninPage/SigninPage.tsx";
import SignupPage from "./pages/SignupPage/SignupPage.tsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.tsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.tsx";
import SearchPage from "./pages/SearchPage/SearchPage.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RequireAuth } from "./helpers/RequireAuth.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import { ROUTES } from "./constants/routes.constants.ts";
import MoviePage from "./pages/MoviePage/MoviePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.signin} element={<SigninPage />} />
            <Route path={ROUTES.signup} element={<SignupPage />} />
            <Route
              path={ROUTES.favorites}
              element={
                <RequireAuth>
                  <FavoritesPage />
                </RequireAuth>
              }
            />
            <Route
              path={ROUTES.history}
              element={
                <RequireAuth>
                  <HistoryPage />
                </RequireAuth>
              }
            />
            <Route path={ROUTES.search} element={<SearchPage />} />
            <Route path={ROUTES.movie} element={<MoviePage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
