import { Student, User } from './common/models';

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BgColorDirective } from './common/test.directiva';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule, BgColorDirective],
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
  public admin = signal<boolean>(true);
  public userRole = signal<'admin' | 'student'>('admin');

  public user = signal<User>({
    fullName: 'Ali Valiyev',
    role: 'student',
    avatarUrl: 'https://i.pravatar.cc/400',
  });

  protected profileForm = new FormGroup({
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

  // Komponent ichidagi ma'lumotlar
  public studentList = signal<Student[]>([
    { id: 1, firstName: 'Ali', lastName: 'Valiyev', course: 'Angular' },
    { id: 2, firstName: 'Zarina', lastName: 'Rustamova', course: 'React' },
    { id: 3, firstName: 'Jasur', lastName: 'Karimov', course: 'Vue.js' },
    { id: 4, firstName: 'Malika', lastName: 'Tohirova', course: 'Angular' },
    { id: 5, firstName: 'Bekzod', lastName: 'Olimov', course: 'Node.js' },
  ]);

  public filteredStudents = computed(() => {
    const inputText = this.searchTerm().toLowerCase();
    const allStudents = this.studentList();
    if (!inputText) return allStudents;
    return allStudents.filter(
      student =>
        student.firstName.toLowerCase().includes(inputText) ||
        student.lastName.toLowerCase().includes(inputText) ||
        student.course.toLowerCase().includes(inputText)
    );
  });

  protected treeSurvey = signal<any[][]>([
    ["Sizga qaysi yo'nalish qiziq?", ['Dasturlash', 'Dizayn']],
    [
      ["Qaysi tilni o'rganmoqchisiz?", ['JavaScript', 'Python', 'PHP']],

      ["Qaysi yo'nalishda ishlamoqchisiz?", ['Grafik dizayn', 'UI/UX', '3D Modellashtirish']],
    ],
    [
      ['React-ni bilasizmi?', ['Ha', "Yo'q"]],

      ["Django-ni o'rganganingizmi?", ['Ha', "Yo'q"]],
    ],
  ]);
}
