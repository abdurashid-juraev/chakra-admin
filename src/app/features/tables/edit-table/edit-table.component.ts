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
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-edit-table',
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
export class EditTableComponent {
  authorId: number | null = null;
  author: Author | undefined;
  editForm!: FormGroup;
  statusOptions: { label: string; value: 'Online' | 'Offline' }[] = [
    { label: 'Online', value: 'Online' },
    { label: 'Offline', value: 'Offline' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private authorService: AuthorService // Servisni kiritish
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorId = Number(params.get('id'));
      if (this.authorId) {
        this.authorService.getAuthorById(this.authorId).subscribe(data => {
          this.author = data;
          if (this.author) {
            this.initForm(this.author);
          }
        });
      }
    });
  }

  initForm(author: Author) {
    this.editForm = this.fb.group({
      name: [author.name, [Validators.required, Validators.minLength(3)]],
      email: [author.email, [Validators.required, Validators.email]],
      function: [author.function, Validators.required],
      organization: [author.organization, Validators.required],
      status: [author.status, Validators.required],
    });
  }

  onSubmit() {
    if (this.editForm.valid && this.author) {
      const updatedAuthor: Author = { ...this.author, ...this.editForm.value };
      this.authorService.updateAuthor(updatedAuthor).subscribe({
        next: (response: any) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Muvaffaqiyatli',
            detail: "Muallif ma'lumotlari yangilandi!",
          });
          console.log('Updated Author:', response);
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
