export interface IStudents {
  id: number;
  fullName: string;
  status: 'success' | 'failed' | 'process';
  grade: number;
}
export interface User {
  id: number;
  name: string;
  email: string;
}
