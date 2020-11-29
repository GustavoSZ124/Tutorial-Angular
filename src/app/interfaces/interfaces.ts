export interface LoginResponse {
  success: boolean;
  user: User;
  token: string;
}

export interface User {
  name: string;
  pass: string;
}
