import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "../helpers/authLocalStorage";
import { LoginResponse } from "../interfaces/auth.interface";
import axios, { AxiosError } from "axios";
import { AUTH_BASE_URL, AUTH_ROUTES } from "../constants/auth.constants";
import { Profile } from "../interfaces/user.interface";
import { RootState } from "./store";

export const USER_PERSISTENT_STATE = "userData";

export interface UserPersistentState {
  jwt: string | null;
}

export interface UserState {
  jwt: string | null;
  loginErrorMessage?: string;
  registerErrorMessage?: string;
  profile?: Profile;
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>(USER_PERSISTENT_STATE)?.jwt ?? null,
};

export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${AUTH_BASE_URL}${AUTH_ROUTES.auth}`,
        {
          email: params.email,
          password: params.password,
        },
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  },
);

export const register = createAsyncThunk(
  "user/register",
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${AUTH_BASE_URL}${AUTH_ROUTES.register}`,
        {
          email: params.email,
          password: params.password,
        },
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  },
);

export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>(
  "user/getProfile",
  async (_, thunkApi) => {
    const jwt = thunkApi.getState().user.jwt;
    const { data } = await axios.get<Profile>(
      `${AUTH_BASE_URL}${AUTH_ROUTES.authMe}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );
    return data;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
    clearRegisterError: (state) => {
      state.registerErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.jwt = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loginErrorMessage = action.error.message;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.jwt = action.payload.token;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.registerErrorMessage = action.error.message;
    });

    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
