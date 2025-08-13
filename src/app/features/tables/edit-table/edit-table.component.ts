import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Author } from '../tables.component';
import { ApiService } from '../../../shared/service/api.service';

@Component({
  selector: 'app-edit-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './edit-table.component.html',
  styleUrl: './edit-table.component.css',
  providers: [MessageService],
})
export class EditTableComponent implements OnInit {
  authorId: number | null = null;
  editForm: FormGroup;
  isEditMode: boolean = false;
  statusOptions: { label: string; value: 'Online' | 'Offline' }[] = [
    { label: 'Online', value: 'Online' },
    { label: 'Offline', value: 'Offline' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) {
    this.editForm = this.fb.group({
      id: [null],
      avatar: ['https://placehold.co/40x40/f1f1f1/333?text=N'],
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      function: ['', Validators.required],
      organization: ['', Validators.required],
      status: ['Online', Validators.required],
      employed: [new Date().toLocaleDateString('en-GB'), Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.authorId = Number(idParam);
        this.apiService.getById<Author>('authors', this.authorId).subscribe(authorToEdit => {
          if (authorToEdit) {
            this.editForm.patchValue(authorToEdit);
          } else {
            console.error('Author not found.');
            this.router.navigate(['/tables']);
          }
        });
      } else {
        this.isEditMode = false;
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;
      if (this.isEditMode) {
        this.apiService.update<Author>('authors', formValue).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Muvaffaqiyatli',
              detail: "Muallif ma'lumotlari yangilandi!",
            });
            this.router.navigate(['/tables']);
          },
          error: err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Xatolik',
              detail: "Ma'lumotlarni yangilashda xatolik yuz berdi.",
            });
            console.error('Update Error:', err);
          },
        });
      } else {
        delete formValue.id;
        this.apiService.create<Author>('authors', formValue).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Muvaffaqiyatli',
              detail: "Yangi muallif qo'shildi!",
            });
            this.router.navigate(['/tables']);
          },
          error: err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Xatolik',
              detail: "Yangi muallif qo'shishda xatolik yuz berdi.",
            });
            console.error('Create Error:', err);
          },
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Xatolik',
        detail: "Iltimos, barcha maydonlarni to'g'ri to'ldiring.",
      });
    }
  }

  onCancel() {
    this.router.navigate(['/tables']);
  }
}
