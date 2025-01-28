import { RootState, useAppSelector } from "../store";

export const useSelectJwt = () => {
  return useAppSelector((state: RootState) => state.user.jwt);
};

export const useSelectRegisterErrorMessage = () => {
  return useAppSelector((state: RootState) => state.user.registerErrorMessage);
};

export const useSelectLoginErrorMessage = () => {
  return useAppSelector((state: RootState) => state.user.loginErrorMessage);
};
