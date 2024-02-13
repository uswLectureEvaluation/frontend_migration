export interface UserLoginFormValues {
  loginId: string;
  password: string;
}

export interface UserLoginResponse {
  AccessToken: string;
  RefreshToken: string;
}
