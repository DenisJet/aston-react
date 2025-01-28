import { ReactNode } from "react";
import { Navigate } from "react-router";
import { RootState, useAppSelector } from "../store/store";
import { ROUTES } from "../constants/routes.constants";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useAppSelector((state: RootState) => state.user.jwt);

  if (!jwt) {
    return <Navigate to={ROUTES.signin} replace />;
  }

  return children;
};
