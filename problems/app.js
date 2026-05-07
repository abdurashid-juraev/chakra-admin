export class Crud {
    addButton;
    inputField;
    users = [];
    listContainer;
    constructor(buttonSelector, inputSelector, htmlSelector) {
        this.addButton = document.querySelector(buttonSelector);
        this.inputField = document.querySelector(inputSelector);
        this.listContainer = document.querySelector(htmlSelector);
        this.loadData();
        this.init();
    }
    init() {
        this.addButton.addEventListener("click", () => {
            this.create();
        });
    }
    create() {
        const name = this.inputField.value.trim();
        if (name) {
            const newUser = {
                id: Date.now(),
                name: name,
                email: `${name.toLowerCase()}@example.com`,
            };
            this.users.push(newUser);
            console.log("Yangi foydalanuvchi qo'shildi", this.users);
            this.inputField.value = "";
            this.renderList();
        }
        else {
            alert("Iltimos ism kiriting...!");
        }
    }
    renderList() {
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
    delate(id) {
        this.users = this.users.filter((u) => u.id !== id);
        console.log("delete");
        this.renderList();
    }
    loadData() {
        const storage = localStorage.getItem("userList");
        if (storage) {
            this.users = JSON.parse(storage);
        }
        this.renderList();
    }
}
let mycrud = new Crud(".add", ".input", ".menu");
//console.log(mycrud);
