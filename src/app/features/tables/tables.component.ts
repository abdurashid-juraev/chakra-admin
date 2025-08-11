import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { MenuItem } from 'primeng/api';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tables',
  imports: [TableModule, Tag, Button, ProgressBar, DecimalPipe],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export default class TablesComponent {
  authors: any[] = [];

  ngOnInit(): void {
    this.getAuthors();
    this.getProjects();
  }
  getAuthors(): void {
    this.authors = [
      {
        avatar: '/images/png/avatar9.png', // Avatar resim yolu
        name: 'Esthera Jackson',
        email: 'esthera@simmmple.com',
        function: 'Manager',
        organization: 'Organization',
        status: 'Online',
        employed: '14/06/21',
      },
      {
        avatar: '/images/png/avatar9.png',
        name: 'Alexa Liras',
        email: 'alexa@simmmple.com',
        function: 'Programmer',
        organization: 'Developer',
        status: 'Offline',
        employed: '14/06/21',
      },
      {
        avatar: '/images/png/avatar9.png',
        name: 'Laurent Michael',
        email: 'laurent@simmmple.com',
        function: 'Executive',
        organization: 'Projects',
        status: 'Online',
        employed: '14/06/21',
      },
      {
        avatar: '/images/png/avatar9.png',
        name: 'Freduardo Hill',
        email: 'freduardo@simmmple.com',
        function: 'Manager',
        organization: 'Organization',
        status: 'Online',
        employed: '14/06/21',
      },
      {
        avatar: '/images/png/avatar9.png',
        name: 'Daniel Thomas',
        email: 'daniel@simmmple.com',
        function: 'Programmer',
        organization: 'Developer',
        status: 'Offline',
        employed: '14/06/21',
      },
      {
        avatar: '/images/png/avatar9.png',
        name: 'Mark Wilson',
        email: 'mark@simmmple.com',
        function: 'Designer',
        organization: 'UX/UI Design',
        status: 'Offline',
        employed: '14/06/21',
      },
    ];
  }
  getStatusSeverity(status: string): string {
    switch (status) {
      case 'Online':
        return 'success';
      case 'Offline':
        return 'danger';
      default:
        return 'info';
    }
  }
  //?======================================
  projects: any[] = [];
  menuItems: MenuItem[] = [
    { label: 'View', icon: 'pi pi-fw pi-eye' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
  ];

  getProjects(): void {
    this.projects = [
      {
        companyLogo: '/images/svg/atlassian-logo.svg',
        companyName: 'Chakra Soft UI Version',
        budget: 14000,
        status: 'Working',
        completion: 60,
      },
      {
        companyLogo: '/images/svg/atlassian-logo.svg',
        companyName: 'Add Progress Track',
        budget: 3000,
        status: 'Canceled',
        completion: 10,
      },
      {
        companyLogo: '/images/svg/atlassian-logo.svg',
        companyName: 'Fix Platform Errors',
        budget: null, // "Not set" uchun
        status: 'Done',
        completion: 100,
      },
      {
        companyLogo: '/images/svg/atlassian-logo.svg',
        companyName: 'Launch our Mobile App',
        budget: 32000,
        status: 'Done',
        completion: 100,
      },
      {
        companyLogo: '/images/svg/atlassian-logo.svg',
        companyName: 'Add the New Pricing Page',
        budget: 400,
        status: 'Working',
        completion: 25,
      },
    ];
  }
  getStatusProjects(status: string): string {
    switch (status) {
      case 'Working':
        return 'info';
      case 'Done':
        return 'success';
      case 'Canceled':
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
