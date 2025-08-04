import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../footer/footer/footer';
import { MessageModule } from 'primeng/message';
import { ToggleSwitch } from 'primeng/toggleswitch';
@Component({
  selector: 'app-sign-up-page',
  imports: [Header, ReactiveFormsModule, Footer, MessageModule, ToggleSwitch, ButtonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpPage implements OnInit {
  public SignInForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.SignInForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      checked: new FormControl(false),
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.SignInForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
