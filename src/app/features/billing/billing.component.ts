import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  imports: [],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css',
})
export default class BillingComponent {
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
}
