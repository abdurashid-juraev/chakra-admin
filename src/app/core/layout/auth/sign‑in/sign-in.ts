import { ToggleSwitch } from 'primeng/toggleswitch';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-sign-in-page',
  imports: [Header, ReactiveFormsModule, ButtonModule, MessageModule, ToggleSwitch, Footer],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignInPage implements OnInit {
  public SignInForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.SignInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      checked: new FormControl(false),
    });
  }

  onSubmit() {
    console.log(this.SignInForm.value);
  }
  isInvalid(controlName: string): boolean {
    const control = this.SignInForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
