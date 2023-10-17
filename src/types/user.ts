export interface IUser {
  access: string;
  refresh: string;
  isExpiredAccess: boolean;
  isExpiredRefresh: boolean;
}
export interface IToken {
  exp: number;
  iat: number;
  jti: string;
  token_type: string;
  user_id: number;
}
