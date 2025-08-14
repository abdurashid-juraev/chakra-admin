import { AuthService } from './../../../auth/auth.service';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../header/header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../footer/footer/footer';
import { MessageModule } from 'primeng/message';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-sign-up-page',
  imports: [
    Header,
    ReactiveFormsModule,
    Footer,
    MessageModule,
    ToggleSwitch,
    ButtonModule,
    RouterLink,
    ToastModule,
    PasswordModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [MessageService],
})
export default class SignUpPage implements OnInit {
  public SignInForm!: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);
  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.SignInForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      checked: new FormControl(false),
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.SignInForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.SignInForm.invalid) {
      this.SignInForm.markAllAsTouched();
      return;
    }

    const { name, email, password } = this.SignInForm.value;

    this.authService.signUp(name, email, password).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Muvaffaqiyatli',
          detail: 'Ro‘yxatdan o‘tildi!',
        });
        this.router.navigate(['/sign-in']);
      },
      error: err => {
        this.messageService.add({
          severity: 'error',
          summary: 'Xatolik',
          detail: 'Ro‘yxatdan o‘tishda muammo yuz berdi',
        });
        console.error('Ro‘yxatdan o‘tishda xatolik:', err);
      },
    });
  }
}
