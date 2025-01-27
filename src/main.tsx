import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/favorites"
              element={
                <RequireAuth>
                  <FavoritesPage />
                </RequireAuth>
              }
            />
            <Route
              path="/history"
              element={
                <RequireAuth>
                  <HistoryPage />
                </RequireAuth>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/movie/:movieId" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
