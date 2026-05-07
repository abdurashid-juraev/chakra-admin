interface Users {
  id: number;
  name: string;
  email: string;
}

export class Crud {
  private addButton: HTMLButtonElement;
  private inputField: HTMLInputElement;
  public users: Users[] = [];
  public listContainer: HTMLElement;

  constructor(
    buttonSelector: string,
    inputSelector: string,
    htmlSelector: string
  ) {
    this.addButton = document.querySelector(
      buttonSelector
    ) as HTMLButtonElement;
    this.inputField = document.querySelector(inputSelector) as HTMLInputElement;
    this.listContainer = document.querySelector(htmlSelector) as HTMLElement;
    this.loadData();
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
        email: `${name.toLowerCase()}@example.com`,
      };
      this.users.push(newUser);
      console.log("Yangi foydalanuvchi qo'shildi", this.users);
      this.inputField.value = "";
      this.renderList();
    } else {
      alert("Iltimos ism kiriting...!");
    }
  }

  private renderList() {
    this.listContainer.innerHTML = "";
    for (let i = 0; i < this.users.length; i++) {
      const li = document.createElement("li");
      const actions = document.createElement("div");
      const delate = document.createElement("button");
      const complated = document.createElement("button");
      li.textContent = this.users[i].name;
      actions.append(complated, delate);
      li.appendChild(actions);
      delate.textContent = "❌";
      complated.textContent = "👍";
      complated.className = "checked";
      actions.className = "actions";
      li.className = "list";
      this.listContainer.appendChild(li);
      delate.onclick = () => this.delate(this.users[i].id);
    }
    localStorage.setItem("userList", JSON.stringify(this.users));
  }

  public delate(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
    console.log("delete");

    this.renderList();
  }

  private loadData() {
    const storage = localStorage.getItem("userList");
    if (storage) {
      this.users = JSON.parse(storage);
    }
    this.renderList();
  }
}

let mycrud = new Crud(".add", ".input", ".menu");
//console.log(mycrud);
