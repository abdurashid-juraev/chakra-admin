import { filter } from 'rxjs';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { User } from './common/models';
import { formatCurrency } from '@angular/common';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Button,
    InputIcon,
    IconField,
    InputIcon,
    InputTextModule,
    TableModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent {
  public username = new FormControl('');
  public users = signal<User[] | []>([]);
  protected isEdit = signal<boolean>(false);
  protected currentId = signal<number | null>(null);
  //=======================================================
  ngOnInit() {
    this.loadData();
  }
  //=======================================================
  private saveData(): void {
    localStorage.setItem('users', JSON.stringify(this.users()));
  }
  //=======================================================
  private loadData(): void {
    const savedUsers = localStorage.getItem('users');

    if (savedUsers) {
      this.users.set(JSON.parse(savedUsers));
    }
  }
  //=======================================================
  private create() {
    const name = this.username.value?.trim();

    if (!name) return alert('Name is required..!');

    const userList: User[] = this.users();

    const id: number = userList.length > 0 ? Math.max(...userList.map(user => user.id)) + 1 : 1;

    const newUser: User = {
      id: id,
      name: name,
      email: `${name.toLowerCase()}@mail.com`,
    };
    this.users.update(currentUser => [...currentUser, newUser]);
    this.saveData();
  }
  //=======================================================
  protected add(): void {
    this.handleSave();
    this.username.reset();
  }
  //=======================================================
  protected edit(id: number): void {
    const userId = this.users().find(user => user.id === id);
    const name = userId?.name;
    if (name) {
      this.username.setValue(name);
    }
    this.currentId.set(id);
    this.isEdit.set(true);
    if (!name) return alert('Name is required..!');
  }

  protected handleSave(): void {
    const name = this.username.value?.trim();
    if (!name) return alert('Name is requierd..!');

    const editedId = this.currentId();
    if (this.isEdit() && editedId !== null) {
      this.users.update((currentUser: User[]) =>
        currentUser.map((user: User) =>
          user.id === editedId
            ? { ...user, name: name, email: `${name.toLowerCase()}@mail.com` }
            : user
        )
      );
      this.isEdit.set(false);
      this.currentId.set(null);
      this.username.reset();
      this.saveData();
    } else {
      this.create();
    }
  }
  //=======================================================
  protected delete(id: number): void {
    this.users.update(currentUser => currentUser.filter(user => user.id !== id));
    this.saveData();
  }
}
