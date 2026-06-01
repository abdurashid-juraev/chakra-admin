import { filter } from 'rxjs';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { User } from './common/models';
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
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileComponent {
  public todo = new FormControl('');
  public users = signal<User[] | []>([]);
  protected currentId = signal<number | null>(null);
  protected isEditing = signal<boolean>(false);

  ngOnInit() {
    this.loadData();
  }

  private create() {
    const name = this.todo.value?.trim();
    if (!name) return alert('Input is required..!');

    const id = computed((): number => {
      const userList: User[] = this.users();

      if (userList.length > 0) {
        return Math.max(...userList.map(user => user.id)) + 1;
      }
      return 1;
    });

    const newUser: User = {
      id: id(),
      name: name,
      email: `${name}@gmail.com`,
    };

    this.users.update(currentUser => [...currentUser, newUser]);
    this.todo.reset();
  }
  private saveData(): void {
    localStorage.setItem('users', JSON.stringify(this.users()));
  }
  private loadData(): void {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      try {
        const parseUsers = JSON.parse(savedUsers);
        this.users.set(parseUsers);
      } catch (error) {
        console.error('Xatolik..!', error);
      }
    }
  }

  protected deleteBtn(id: number) {
    this.users.update(currentUser => currentUser.filter(user => user.id !== id));
  }
  protected editBnt(id: number) {
    const user = this.users().find(user => user.id === id);
    if (user) {
      this.todo.setValue(user.name);
    }

    this.currentId.set(id);
    this.isEditing.set(true);
  }

  protected handleSave() {
    const name = this.todo.value?.trim();
    if (!name) return alert('Name is required..!');
    const idToEdit = this.currentId();

    if (idToEdit && this.isEditing() !== null) {
      this.users.update((currentUser: User[]) =>
        currentUser.map((user: User) =>
          user.id === idToEdit ? { ...user, name: name, email: `${name}@gmail.com` } : user
        )
      );
      this.isEditing.set(false);
      this.currentId.set(null);
      this.todo.reset();
      this.saveData();
    } else {
      this.create();
    }
  }

  protected addTodo(): void {
    this.create();
    this.saveData();
  }
}
