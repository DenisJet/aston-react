import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "../store/store";

export const requireAuth = () => {
  const jwt = useSelector((state: RootState) => state.user.jwt);
  const navigate = useNavigate();

  if (!jwt) {
    navigate("/signin");
  }
};
