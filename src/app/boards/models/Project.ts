import { User } from './User';

export interface Project {
  id: string;
  createdAt: number[];
  description: string;
  name: string;
  user: User;
}
