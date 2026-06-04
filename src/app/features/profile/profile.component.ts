import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { User } from './common/models';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputIcon,
    IconField,
    InputIcon,
    InputTextModule,
    Button,
    TableModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent implements OnInit {
  public users = signal<User[] | []>([]);
  protected name = new FormControl('');

  ngOnInit(): void {}

  private saveData(): void {
    localStorage.setItem('users', JSON.stringify(this.users()));
  }

  private loadData(): void {
    const users = localStorage.getItem('users');
    if (users) {
      this.users.update(loadUsers => [...loadUsers, JSON.parse(users)]);
      console.log(users);
    }
  }

  private create() {
    const name = this.name.value?.trim();

    if (!name) return alert('Name is required..!');

    const id = computed((): number => {
      const userList = this.users();
      if (userList.length > 0) {
        return Math.max(...userList.map((user: User) => user.id)) + 1;
      }
      return 1;
    });

    const newUser: User = {
      id: id(),
      name: name,
      email: `${name}@mail.com`,
    };

    this.users.update(currentUser => [...currentUser, newUser]);
    this.name.reset();
    this.saveData();
  }
  protected edit(id: number) {}
  protected addUser() {
    this.create();
  }
}
