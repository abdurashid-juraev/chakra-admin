import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IStudents } from './common/models';
import { NgTemplateOutlet } from '@angular/common';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, ReactiveFormsModule, NgTemplateOutlet, TableComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent {
  public students = signal<IStudents[]>([
    { id: 1, fullName: 'Anvarov Dilshod', status: 'success', grade: 85 },
    { id: 2, fullName: 'Karimova Malika', status: 'success', grade: 92 },
    { id: 3, fullName: 'Tursunov Jamshid', status: 'failed', grade: 45 },
    { id: 4, fullName: 'Sultonova Zilola', status: 'process', grade: 78 },
    { id: 5, fullName: 'Abduvaliyev Otabek', status: 'success', grade: 88 },
    { id: 6, fullName: 'Zokirova Madina', status: 'failed', grade: 30 },
    { id: 7, fullName: 'Rustamov Sardor', status: 'success', grade: 95 },
    { id: 8, fullName: 'Ismoilova Guli', status: 'process', grade: 72 },
    { id: 9, fullName: 'Hamidov Alisher', status: 'process', grade: 50 },
    { id: 10, fullName: 'Yusupova Nigora', status: 'success', grade: 81 },
  ]);
  public show = signal<boolean>(true);
}
