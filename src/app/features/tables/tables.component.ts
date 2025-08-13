// src/app/tables.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ApiService } from '../../shared/service/api.service';

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
  id: number;
  companyLogo: string;
  companyName: string;
  budget: number | null;
  status: 'Working' | 'Canceled' | 'Done';
  completion: number;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    ProgressBarModule,
    DecimalPipe,
    MenuModule,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export default class TablesComponent implements OnInit {
  authors: Author[] = [];
  projects: Project[] = [];
  projectMenuItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchAuthors();
    this.fetchProjects();
  }

  fetchAuthors(): void {
    this.apiService.getAll<Author>('authors').subscribe(authors => {
      this.authors = authors;
    });
  }

  fetchProjects(): void {
    this.apiService.getAll<Project>('projects').subscribe(projects => {
      this.projects = projects;
    });
  }

  onEditAuthor(authorId: number): void {
    this.router.navigate(['/tables/edit', authorId]);
  }

  onAddAuthor(): void {
    this.router.navigate(['/tables/add']);
  }

  onMenuClick(event: MouseEvent, project: Project): void {
    event.stopPropagation();
    this.projectMenuItems = [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: () => this.onEditProject(project.id),
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
        command: () => this.onDeleteProject(project.id),
      },
    ];
  }

  onEditProject(projectId: number): void {
    console.log(`Edit project with ID: ${projectId}`);
  }

  onDeleteProject(projectId: number): void {
    this.apiService.delete('projects', projectId).subscribe(() => {
      console.log('Project deleted successfully.');
      this.projects = this.projects.filter(p => p.id !== projectId);
    });
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
