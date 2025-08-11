import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag'; // Tag o'rniga TagModule
import { ButtonModule } from 'primeng/button'; // Button o'rniga ButtonModule
import { ProgressBarModule } from 'primeng/progressbar'; // ProgressBar o'rniga ProgressBarModule
import { MenuItem } from 'primeng/api';
import { AuthorService } from './service/author.service';

export interface Author {
  id: number;
  avatar: string;
  name: string;
  email: string;
  function: string;
  organization: string;
  status: 'Online' | 'Offline';
  employed: string;
}

export interface Project {
  companyLogo: string;
  companyName: string;
  budget: number | null;
  status: 'Working' | 'Canceled' | 'Done';
  completion: number;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule, ProgressBarModule, DecimalPipe],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export default class TablesComponent implements OnInit {
  authors: Author[] = [];
  projects: Project[] = [];
  menuItems: MenuItem[] = [
    { label: 'View', icon: 'pi pi-fw pi-eye' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
  ];

  constructor(
    private router: Router,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    // Faqat `json-server` dan ma'lumot yuklash uchun chaqiriladi
    this.authorService.getAuthors().subscribe({
      next: data => {
        this.authors = data;
        console.log('Authors data from json-server:', this.authors);
      },
      error: err => {
        console.error('Error fetching authors:', err);
        // Agar xatolik bo'lsa, statik ma'lumotlar bilan to'ldirish
        this.authors = this.getMockAuthors();
      },
    });

    this.projects = this.getProjects();
  }

  // Mavjud statik ma'lumotni alohida funksiyaga ajratish
  getMockAuthors(): Author[] {
    return [
      {
        id: 1,
        avatar: '/images/png/avatar9.png',
        name: 'Esthera Jackson',
        email: 'esthera@simmmple.com',
        function: 'Manager',
        organization: 'Organization',
        status: 'Online',
        employed: '14/06/21',
      },
      {
        id: 2,
        avatar: '/images/png/avatar9.png',
        name: 'Alexa Liras',
        email: 'alexa@simmmple.com',
        function: 'Programmer',
        organization: 'Developer',
        status: 'Offline',
        employed: '14/06/21',
      },
      {
        id: 3,
        avatar: '/images/png/avatar9.png',
        name: 'Laurent Michael',
        email: 'laurent@simmmple.com',
        function: 'Executive',
        organization: 'Projects',
        status: 'Online',
        employed: '14/06/21',
      },
    ];
  }

  getProjects(): Project[] {
    return [
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

  onEdit(authorId: number | undefined) {
    if (authorId) {
      this.router.navigate(['tables/edit', authorId]);
    } else {
      console.error('Author ID is undefined.');
    }
  }
}
