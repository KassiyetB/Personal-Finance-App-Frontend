import type {
  AuthData,
  AuthResponse,
} from "../types/auth";
const API_URL = import.meta.env.VITE_API_URL;

export async function login(
  data: AuthData,
): Promise<AuthResponse> {
  const response = await fetch(
    `${API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.message || "Login failed",
    );
  }

  return response.json();
}

export async function signup(
  data: AuthData,
): Promise<AuthResponse> {
  const response = await fetch(
    `${API_URL}/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.message || "Signup failed",
    );
  }

  return response.json();
}