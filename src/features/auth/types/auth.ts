export interface User {
  id: string;
  email: string;
}

export interface AuthData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}