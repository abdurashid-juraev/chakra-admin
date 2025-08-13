import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from '../../../shared/service/api.service';

@Component({
  selector: 'app-billing-edit',
  standalone: true,
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
export class BillingEditComponent implements OnInit {
  editForm: FormGroup;
  billings: any[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private apiService: ApiService,
    private confirmationService: ConfirmationService
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
    this.loadBillings();
  }

  loadBillings() {
    this.apiService.getAll<any>('billing').subscribe({
      next: res => (this.billings = res),
      error: err => console.error('Error loading billing info', err),
    });
  }

  onEdit(billing: any) {
    this.isEditMode = true;
    this.editForm.patchValue(billing);
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
              detail: 'Billing deleted successfully!',
            });
            this.loadBillings();
          },
          error: err => console.error('Delete Error:', err),
        });
      },
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formValue = this.editForm.value;

      if (this.isEditMode) {
        this.apiService.update<any>('billing', formValue).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Updated',
              detail: 'Billing updated successfully!',
            });
            this.resetForm();
            this.loadBillings();
          },
          error: err => console.error('Update Error:', err),
        });
      } else {
        delete formValue.id;
        this.apiService.create<any>('billing', formValue).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Added',
              detail: 'Billing added successfully!',
            });
            this.resetForm();
            this.loadBillings();
          },
          error: err => console.error('Create Error:', err),
        });
      }
    }
  }

  resetForm() {
    this.editForm.reset();
    this.isEditMode = false;
  }

  onCancel() {
    this.resetForm();
  }
}
