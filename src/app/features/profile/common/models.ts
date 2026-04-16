export interface IStudents {
  id: number;
  fullName: string;
  status: 'success' | 'failed' | 'process';
  grade: number;
}
