export interface WorkOrder {
  id: string;
  title: string;
  description: string;
  status: WorkOrderStatus;
  priority: WorkOrderPriority;
  customerId: string;
  assignedUserId?: string;
  scheduledAt?: string;
  startedAt?: string;
  completedAt?: string;
  estimatedDuration?: number;
  actualDuration?: number;
  location?: Location;
  tasks: WorkOrderTask[];
  attachments: Attachment[];
  externalId?: string;
  createdAt: string;
  updatedAt: string;
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

export interface WorkOrderTask {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  completedAt?: string;
  completedBy?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface Attachment {
  id: string;
  filename: string;
  url: string;
  type: AttachmentType;
  size: number;
  uploadedAt: string;
}

export enum AttachmentType {
  Image = 'Image',
  Document = 'Document',
  Video = 'Video',
  Audio = 'Audio',
}