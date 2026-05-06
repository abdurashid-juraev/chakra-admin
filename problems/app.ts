interface Users {
  id: number;
  name: string;
  email: string;
}

export class Crud {
  private addButton: HTMLButtonElement;
  private inputField: HTMLInputElement;
  public users: Users[] = [];

  constructor(buttonSelector: string, inputSelector: string) {
    this.addButton = document.querySelector(
      buttonSelector
    ) as HTMLButtonElement;
    this.inputField = document.querySelector(inputSelector) as HTMLInputElement;

    this.init();
  }

  private init(): void {
    this.addButton.addEventListener("click", () => {
      this.create();
    });
  }

  private create(): void {
    const name: string = this.inputField.value.trim();

    if (name) {
      const newUser: Users = {
        id: Date.now(),
        name: name,
        email: `${name.toLowerCase()}@xample.com`,
      };
      this.users.push(newUser);
      console.log("Yangi foydalanuvchi qo'shildi", this.users);
      this.inputField.value = "";
    } else {
      alert("Iltimos ism kiriting...!");
    }
  }

  renderList() {}
}

const mycrud = new Crud(".add", ".input");
