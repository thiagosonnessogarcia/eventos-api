import Tasks from "./components/tasks.js";
import TaskForm from "./components/taskForm.js";
import User from "./components/user.js";
import Signin from "./components/signin.js";
import Signup from "./components/signup.js";
import Menu from "./components/menu.js";

class App {
    constructor(body) {
        this.signin = new Signin(body);
        this.signup = new Signup(body);
        this.tasks = new Tasks(body);
        this.taskForm = new TaskForm(body);
        this.user = new User(body);
        this.menu = new Menu(footer);
    }
    init() {
        this.signin.render();
        this.addEventListener();
    }
    addEventListener() {
        this.signinEvents();
        this.signupEvents();
        this.tasksEvents();
        this.taskFormEvents();
        this.userEvents();
        this.menuEvents();
    }
    signinEvents() {
        this.signin.on("error", () => alert("ERRO de AUTENTICAÇÂO"));
        this.signin.on("signin", (token) => {
            localStorage.setItem("token", `JWT ${token}`);
            this.menu.render("tasks");
            this.tasks.render();
            alert("Você está autenticado!");
        });
        this.signin.on("signup", () => this.signup.render());
    }
    signupEvents() {
        this.signup.on("error", () => alert("ERRO no Cadastro"));
        this.signup.on("signup", (user) => {
            alert(`${user.name} você foi cadastrado com sucesso!!!!`);
            this.signin.render();
        });
    }
    tasksEvents() {
        this.tasks.on("error", () => alert("ERRO AO LISTAR TAREFAS"));
        this.tasks.on("remove-error", () => alert("ERRO AO EXCLUIR"));
        this.tasks.on("update-error", () => alert("ERRO AO ATUALIZAR"));
        this.tasks.on("remove", () => this.tasks.render());
        this.tasks.on("update", () => this.tasks.render());
    }
    taskFormEvents() {
        this.taskForm.on("error", () => alert("ERRO AO CADASTAR TAREFA"));
        this.taskForm.on("submit", () => {
            this.menu.render("tasks");
            this.tasks.render();
        });
    }
    userEvents() {
        this.user.on("error", () => alert("ERRO CARREGAR USUÁRIO"));
        this.user.on("remove-error", () => alert("ERRO AO EXCLUIR CONTA"));
        this.user.on("remove-account",  () => {
            alert("Que pena! Sua conta foi Excluída.");
            localStorage.clear();
            this.menu.clear();
            this.signin.render();
        });
    }
    menuEvents() {
        this.menu.on("click", (path) => {
            this.menu.render(path);
            this[path].render();
        });
        this.menu.on("logout", () => {
            localStorage.clear();
            this.menu.clear();
            this.signin.render();
        })
    }
}
module.exports = App;