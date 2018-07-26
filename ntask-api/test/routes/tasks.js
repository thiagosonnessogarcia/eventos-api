import jwt from "jwt-simple";
describe("Routes: Tasks",  () => {
    const Users = app.db.models.Users;
    const Tasks = app.db.models.Tasks;
    const jwtSecret = app.libs.config.jwtSecret;
    let token;
    let fakeTask;
    befoteEach(done => {
        //CÒDIGO de dTESTE
    });
    describe("GET /tasks", () => {
        it("retuns a list of tasks", done => {
            //codigo de teste
        });
    });
});
describe("POST /tasks", () => {
    describe("status 200", () => {
        it("creates a new task", done => {
            //codigo de testes
        });
    });
});
describe("GET /tasks/:id", () => {
    describe("status 200", () => {
        it("returns one task", done => {
            //código de testes
        });
    });
    describe("status 404", () => {
        it("throws error when task no exist", done => {
            //código de testes
        });
    });
});
describe("PUT /tasks/:id", () => {
    describe("status 204",  () => {
        it("updates a tasks", done => {
            //código de testes
        });
    });
});
describe("DELETE /tasks/:id", () => {
    describe("status 204", () => {
        it("removes a task", done => {
            //código de testes
        });
    });
});