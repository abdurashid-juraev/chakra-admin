import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TieredMenuModule } from 'primeng/tieredmenu';

// Ma'lumotlar modeli (Interface)
interface Project {
  companyLogo: string;
  projectName: string;
  members: string[]; // Avatar URL'lari
  budget: number | string;
  completion: number;
}

// Ma'lumotlar massivi (Data)
const PROJECTS: Project[] = [
  {
    companyLogo: '/images/svg/adobexd-logo.svg',
    projectName: 'Chakra Soft UI Version',
    members: [
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
    ],
    budget: 14000,
    completion: 60,
  },
  {
    companyLogo: '/images/svg/atlassian-logo.svg',
    projectName: 'Add Progress Track',
    members: ['/images/png/avatar9.png', '/images/png/avatar9.png'],
    budget: 3000,
    completion: 10,
  },
  {
    companyLogo: '/images/svg/slack-logo.svg',
    projectName: 'Fix Platform Errors',
    members: ['/images/png/avatar9.png', '/images/png/avatar9.png'],
    budget: 'Not set',
    completion: 100,
  },
  {
    companyLogo: '/images/svg/spotify-logo.svg',
    projectName: 'Launch our Mobile App',
    members: [
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
    ],
    budget: 32000,
    completion: 100,
  },
  {
    companyLogo: '/images/svg/jira-logo.svg',
    projectName: 'Add the New Pricing Page',
    members: [
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
      '/images/png/avatar9.png',
    ],
    budget: 400,
    completion: 25,
  },
  {
    companyLogo: '/images/svg/invision-logo.svg',
    projectName: 'Redesign New Online Shop',
    members: ['/images/png/avatar9.png', '/images/png/avatar9.png'],
    budget: 7600,
    completion: 40,
  },
];

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ProgressBarModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    BadgeModule,
    TieredMenuModule, // Uchta nuqta menyusi uchun
  ],
  templateUrl: './projects-table.component.html',
  styleUrl: './projects-table.component.css',
})
export class ProjectsTableComponent implements OnInit {
  public projects: Project[] = [];

  ngOnInit(): void {
    this.projects = PROJECTS;
  }
}
