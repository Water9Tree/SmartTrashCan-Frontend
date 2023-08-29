export type Role = "ROLE_USER" | "ROLE_ADMIN" | "ROLE_CLEANER";

export interface SignUpInfo {
  loginId: string;
  password: string;
  username: string;
  email: string;
  role: Role;
}

export type SignInInfo = Pick<SignUpInfo, "loginId" | "password">;
