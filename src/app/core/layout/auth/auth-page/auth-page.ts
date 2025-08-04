import { SignUpPage } from '../sign-up/sign-up.component';
import { Component } from '@angular/core';
import { SignInPage } from '../sign\u2011in/sign-in';

@Component({
  selector: 'app-auth-page',
  imports: [SignUpPage],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.css',
})
export default class AuthPage {}
