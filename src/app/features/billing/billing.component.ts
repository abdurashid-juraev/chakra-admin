import { Component, inject } from '@angular/core';
import { InputMask } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../shared/service/api.service';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-billing',
  imports: [InputMask, FormsModule, Button, ConfirmDialog],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export default class BillingComponent {
  visa: string = '';
  master: string = '7812 2139 0823 XXXX';
  activeCard: 'visa' | 'master' | null = null;
  billings: any[] = [];

  private apiService = inject(ApiService);
  private router = inject(Router);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  onFocus(cardType: 'visa' | 'master') {
    this.activeCard = cardType;
  }

  onBlur() {
    if (!this.visa && !this.master) {
      this.activeCard = null;
    }
  }
  ngOnInit() {
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
    this.apiService.getAll<any>('billing').subscribe({
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
      message: 'Are you sure you want to delete this billing info?',
      accept: () => {
        this.apiService.delete('billing', id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Deleted',
              detail: 'Billing deleted',
            });
            this.loadBillings();
          },
          error: err => console.error('Delete error', err),
        });
      },
    });
  }
}
