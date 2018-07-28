import Signin from "./components/signin.js";
import Signup from "./components/signup.js";

class App {
    constructor(body) {
        this.signin = new Signin(body);
        this.signup = new Signup(body);
    }
    init() {
        this.signin.render();
        this.addEventListener();
    }
    addEventListener() {
        this.signinEvents();
        this.signupEvents();
    }
    signinEvents() {
        this.signin.on("error", () => alert("ERRO de AUTENTICAÇÂO"));
        this.signin.on("signin", (token) => {
            localStorage.setItem("token", `JWT ${token}`);
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
}
module.exports = App;