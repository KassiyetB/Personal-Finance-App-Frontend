import { create } from "zustand";
import { login, signup } from "../api/auth";
import type {
  User,
  AuthData,
} from "../types/auth";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;

  login: (data: AuthData) => Promise<void>;
  signup: (data: AuthData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,
    accessToken: null,
    loading: false,
    error: null,

    login: async (data) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const result = await login(data);

        set({
          user: result.user,
          accessToken: result.accessToken,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Login failed",
        });
      }
    },

    signup: async (data) => {
      try {
        set({
          loading: true,
          error: null,
        });

        const result = await signup(data);

        set({
          user: result.user,
          accessToken: result.accessToken,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Signup failed",
        });
      }
    },

    logout: () => {
      set({
        user: null,
        accessToken: null,
        error: null,
      });
    },
  }));