export class Crud {
    addButton;
    inputField;
    users = [];
    constructor(buttonSelector, inputSelector) {
        this.addButton = document.querySelector(buttonSelector);
        this.inputField = document.querySelector(inputSelector);
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
                email: `${name.toLowerCase()}@xample.com`,
            };
            this.users.push(newUser);
            console.log("Yangi foydalanuvchi qo'shildi", this.users);
            this.inputField.value = "";
        }
        else {
            alert("Iltimos ism kiriting...!");
        }
    }
    renderList() { }
}
const mycrud = new Crud(".add", ".input");
