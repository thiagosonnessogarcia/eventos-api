import NTask from "../ntask.js";
import Template from "../templates/signin.js";
class Signin extends NTask {
    constructor(body) {
        super();
        this.body = body;
    }
    render() {
        this.body.innerHTML = Template.render();
        this.body.querySelector("[data-email]").focus();
        this.addEventListener();
    }
    addEventListener() {
        this.formSubmit();
        this.signupClick();
    }
    formSubmit() {
        const from = this.body.querySelector("from");
        form.addEventListener("submit", (e) => {
            const email = e.target.querySelector("[data-email]");
            const password = e.target.querySelector("[data-password]");
            const opts = {
                method: "POST",
                url: `${this.URL}/token`,
                json: true,
                body: {
                    email: email.value,
                    password: password.value
                }
            },
            this.request(opts, (err, resp, data) => {
                if (err || resp.status === 401) {
                    this.emit("error", err);
                } else {
                    this.emit("signin", data.token);
                }
            });
        });
    }
    signupClick() {
        const signup = this.body.querySelector("[data-signup]");
        signup.addEventListener("click", (e) => {
            e.preventDefault();
            this.emit("signup");
        });
    }
}
module.exports = Signin;