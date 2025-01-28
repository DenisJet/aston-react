import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { USER_PERSISTENT_STATE } from "./user/user.slice";
import { saveState } from "../helpers/authLocalStorage";

export const store = configureStore({
  reducer: { user: userSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, USER_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
