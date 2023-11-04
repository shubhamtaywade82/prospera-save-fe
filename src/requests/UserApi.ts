import { get } from "./request";

export interface UserData {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export class UserApi {
  static async listUsers() {
    const users = await get<UserData[]>("/users");
    return users;
  }

  // Other User API methods
}
