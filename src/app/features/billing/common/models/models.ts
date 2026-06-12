export interface Billing {
  id: number;
  name: string;
  companyName: string;
  email: string;
  vatNumber: string;
}
export interface Transaction {
  company: string;
  date: string;
  time: string;
  amount: number | 'Pending';
  type: 'debit' | 'credit';
  status: 'Newest' | 'Yesterday';
}
