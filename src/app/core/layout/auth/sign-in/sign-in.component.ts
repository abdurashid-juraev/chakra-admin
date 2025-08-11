import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../header/header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    Header,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule,
    ToggleSwitch,
    Footer,
    RouterLink,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export default class SignInPage implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  public signInForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      checked: new FormControl(false),
    });
  }

  public onSubmit(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.signInForm.value;

    this.authService.signIn(email, password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Xatolik.......!', err);
      },
    });
    console.log(this.signInForm.value);
  }
  isInvalid(controlName: string): boolean {
    const control = this.signInForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
