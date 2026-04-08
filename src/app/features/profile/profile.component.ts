import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { User } from './common/models';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
}
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
  public progressValue = signal<number>(75);

  public surveyList = signal<string[]>([]);
  public surveyInput = signal<string>('');
  public searchTerm = signal<string>('');

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

  protected addSurvey() {
    const inputValue = this.surveyInput();
    if (!inputValue.trim()) return;

    this.surveyList.update(item => [...item, inputValue]);
    console.log(this.surveyList());

    this.surveyInput.set('');
  }
  // student.interface.ts (yoki komponentning tepasiga yozishingiz mumkin)

  // Komponent ichidagi ma'lumotlar
  public studentList = signal<Student[]>([
    { id: 1, firstName: 'Ali', lastName: 'Valiyev', course: 'Angular' },
    { id: 2, firstName: 'Zarina', lastName: 'Rustamova', course: 'React' },
    { id: 3, firstName: 'Jasur', lastName: 'Karimov', course: 'Vue.js' },
    { id: 4, firstName: 'Malika', lastName: 'Tohirova', course: 'Angular' },
    { id: 5, firstName: 'Bekzod', lastName: 'Olimov', course: 'Node.js' },
    { id: 6, firstName: 'Dilnoza', lastName: 'Qodirova', course: 'Python' },
    { id: 7, firstName: 'Sardor', lastName: 'Nematov', course: 'Java' },
    { id: 8, firstName: 'Asal', lastName: 'Xalilova', course: 'React' },
    { id: 9, firstName: 'Bobur', lastName: 'Jalolov', course: 'Angular' },
    { id: 10, firstName: 'Kamola', lastName: 'Ergasheva', course: 'UI/UX Design' },
  ]);

  filteredStudents = computed(() => {
    const inputText = this.searchTerm().toLowerCase().trim();
    const allStudents = this.studentList();

    if (!inputText) {
      return allStudents;
    }

    return allStudents.filter(
      student =>
        student.firstName.toLowerCase().includes(inputText) ||
        student.lastName.toLowerCase().includes(inputText) ||
        student.course.toLowerCase().includes(inputText)
    );
  });

  //username = signal<string>('Guest Developer');

  //greetingMessage = computed(() => `Hello, ${this.username()}! Welcome to Angular 19.`);

  //updateUsername(event: Event): void {
  //  const inputElement = event.target as HTMLInputElement;

  //  this.username.set(inputElement.value);
  //}
}
