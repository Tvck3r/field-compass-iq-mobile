export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: UserRole;
  status: UserStatus;
  tenantId: string;
  lastLoginAt?: string;
  externalId?: string;
}

export enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Dispatcher = 'Dispatcher',
  FieldWorker = 'FieldWorker',
}

export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Suspended = 'Suspended',
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  status: CustomerStatus;
  type: CustomerType;
  tenantId: string;
  externalId?: string;
}

export enum CustomerStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Suspended = 'Suspended',
}

export enum CustomerType {
  Standard = 'Standard',
  Premium = 'Premium',
  Enterprise = 'Enterprise',
}

export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
  customerId: string;
  assignedUserId: string;
  scheduledDate: string;
  completedDate?: string;
  location: Location;
  tenantId: string;
  externalId?: string;
}

export enum WorkOrderStatus {
  Draft = 'Draft',
  Scheduled = 'Scheduled',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

export enum WorkOrderPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}