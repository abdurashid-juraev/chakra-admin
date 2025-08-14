import { Component, inject } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../core/service/api.service';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { Tag } from 'primeng/tag';
import { DecimalPipe, NgClass } from '@angular/common';
interface Billing {
  id: number;
  name: string;
  companyName: string;
  email: string;
  vatNumber: string;
}
interface Transaction {
  company: string;
  date: string;
  time: string;
  amount: number | 'Pending';
  type: 'debit' | 'credit';
  status: 'Newest' | 'Yesterday';
}
@Component({
  selector: 'app-billing',
  imports: [InputMask, FormsModule, Button, ConfirmDialog, Toast, Tag, NgClass, DecimalPipe],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export default class BillingComponent {
  private apiService = inject(ApiService);
  private router = inject(Router);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  public visa: string = '';
  public master: string = '7812 2139 0823 XXXX';
  public activeCard: 'visa' | 'master' | null = null;
  public billings: Billing[] = [];
  public dateRange: any;
  public transactionStatuses = ['newest', 'yesterday'];

  onFocus(cardType: 'visa' | 'master') {
    this.activeCard = cardType;
  }

  onBlur() {
    if (!this.visa && !this.master) {
      this.activeCard = null;
    }
  }
  ngOnInit(): void {
    this.loadBillings();
  }
  public payCards = [
    {
      icon: '/images/svg/wallet.svg',
      title: 'Salary',
      subtitle: 'Belong Interactive',
      amount: '+$2000',
      iconBg: 'bg-primary',
    },
    {
      icon: '/images/svg/paypal.svg',
      title: 'Paypal',
      subtitle: 'Freelance Payment',
      amount: '$455.00',
      iconBg: 'bg-primary',
    },
  ];
  invoices = [
    { date: 'March, 01, 2020', id: '#MS-415646', amount: '$180' },
    { date: 'February, 10, 2021', id: '#PV-126749', amount: '$250' },
    { date: 'April, 05, 2020', id: '#FB-212562', amount: '$560' },
    { date: 'June, 25, 2019', id: '#QW-103578', amount: '$120' },
    { date: 'March, 01, 2019', id: '#AR-803481', amount: '$300' },
  ];
  downloadPdf() {
    const fileUrl = 'assets/sample.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  loadBillings() {
    this.apiService.getAll<Billing>('billing').subscribe({
      next: res => (this.billings = res),
      error: err => console.error('Error loading billing info', err),
    });
  }

  onAdd() {
    this.router.navigate(['/billing/add']);
  }

  onEdit(id: number) {
    this.router.navigate(['/billing/edit', id]);
  }

  onDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Ushbu maʼlumotni oʻchirmoqchimisiz?',
      header: 'Oʻchirishni tasdiqlash',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.apiService.delete('billing', id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Oʻchirildi',
              detail: 'Maʼlumot muvaffaqiyatli oʻchirildi.',
            });
            this.loadBillings();
          },
          error: err => {
            console.error('Oʻchirishda xatolik:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Xatolik',
              detail: 'Oʻchirishda xatolik yuz berdi.',
            });
          },
        });
      },
    });
  }
  //?======================================

  transactions: Transaction[] = [
    // Newest
    {
      company: 'Netflix',
      date: '27 March 2020',
      time: '12:30 PM',
      amount: 2500,
      type: 'debit',
      status: 'Newest',
    },
    {
      company: 'Apple',
      date: '27 March 2020',
      time: '12:30 PM',
      amount: 2500,
      type: 'credit',
      status: 'Newest',
    },

    // Yesterday
    {
      company: 'Stripe',
      date: '26 March 2020',
      time: '13:45 PM',
      amount: 800,
      type: 'credit',
      status: 'Yesterday',
    },
    {
      company: 'HubSpot',
      date: '26 March 2020',
      time: '12:30 PM',
      amount: 1700,
      type: 'credit',
      status: 'Yesterday',
    },
    {
      company: 'Webflow',
      date: '26 March 2020',
      time: '05:00 AM',
      amount: 'Pending',
      type: 'credit',
      status: 'Yesterday',
    },
    {
      company: 'Microsoft',
      date: '25 March 2020',
      time: '16:30 PM',
      amount: 987,
      type: 'debit',
      status: 'Yesterday',
    },
  ];

  getTransactionsByStatus(status: string): Transaction[] {
    return this.transactions.filter(t => t.status.toLowerCase() === status.toLowerCase());
  }
}
