import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { User } from './common/models';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent {
  public status = signal(true);
  public user = signal<User>({
    fullName: 'Ali Valiyev',
    role: 'student',
    avatarUrl: 'https://i.pravatar.cc/400',
  });

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });
  protected onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.reset();
  }
  protected toggle() {
    this.status.update(value => !value);
  }

  username = signal<string>('Guest Developer');

  greetingMessage = computed(() => `Hello, ${this.username()}! Welcome to Angular 19.`);

  updateUsername(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    this.username.set(inputElement.value);
  }
}
