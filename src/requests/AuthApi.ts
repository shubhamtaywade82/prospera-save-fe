import { post } from "./request";

export interface UserData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SessionParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  time: number;
  username: string;
}

export interface RegisterResponse {
  username: string | null;
  email: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}

export interface RegisterUserParams {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export class AuthApi {
  static async login(sessionData: SessionParams) {
    const response = await post<LoginResponse>("/sessions", sessionData);
    return response;
  }

  static async register(userParams: RegisterUserParams) {
    const response = await post<RegisterResponse>("/registrations", userParams);
    return response;
  }

  // Other Auth API methods
}
