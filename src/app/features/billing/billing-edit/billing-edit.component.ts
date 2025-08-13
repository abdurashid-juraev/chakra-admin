import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../../core/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
interface Billing {
  id?: number;
  name: string;
  companyName: string;
  email: string;
  vatNumber: string;
}
@Component({
  selector: 'app-billing-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  templateUrl: './billing-edit.component.html',
  providers: [ConfirmationService, MessageService],
})
export default class BillingEditComponent implements OnInit {
  editForm: FormGroup;
  isEditMode = false;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService
  ) {
    this.editForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vatNumber: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.isEditMode = !!id; // `id` mavjud bo'lsa, `true` bo'ladi

      if (this.isEditMode && id) {
        this.apiService.getById<Billing>('billing', Number(id)).subscribe({
          next: billingData => {
            this.editForm.patchValue(billingData);
          },
          error: err => {
            console.error('Billing maʼlumotlarini yuklashda xato:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Xato',
              detail: 'Maʼlumot yuklashda xatolik yuz berdi.',
            });
          },
        });
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;

      if (this.isEditMode) {
        // Tahrirlash rejimida `id` mavjudligi aniq bo'lgani uchun
        // uni majburiy tipga o'tkazamiz
        const billingToUpdate = formValue as Billing & { id: number };

        this.apiService.update<Billing & { id: number }>('billing', billingToUpdate).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Yangilandi',
              detail: 'Maʼlumot muvaffaqiyatli yangilandi.',
            });
            this.router.navigate(['/billing']);
          },
          error: err => {
            console.error('Yangilashda xatolik:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Xato',
              detail: 'Yangilashda xatolik yuz berdi.',
            });
          },
        });
      } else {
        delete formValue.id; // `id`ni o'chirib tashlash
        this.apiService.create<Billing>('billing', formValue).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Qoʻshildi',
              detail: 'Yangi maʼlumot muvaffaqiyatli qoʻshildi.',
            });
            this.router.navigate(['/billing']);
          },
          error: err => {
            console.error('Qoʻshishda xatolik:', err);
            this.messageService.add({
              severity: 'error',
              summary: 'Xato',
              detail: 'Qoʻshishda xatolik yuz berdi.',
            });
          },
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/billing']);
  }
}
