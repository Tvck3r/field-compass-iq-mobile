export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  role: UserRole;
  tenantId: string;
  externalId?: string;
  lastLoginAt?: string;
}

export enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager', 
  Dispatcher = 'Dispatcher',
  FieldWorker = 'FieldWorker',
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: User;
  tokens: AuthTokens;
}