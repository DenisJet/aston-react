import { ReactNode } from "react";
import { Navigate } from "react-router";
import { ROUTES } from "../constants/routes.constants";
import { useSelectJwt } from "../store/user/user.selectors";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelectJwt();

  if (!jwt) {
    return <Navigate to={ROUTES.signin} replace />;
  }

  return children;
};
