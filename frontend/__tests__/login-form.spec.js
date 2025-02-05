const login = require("../src/login");

describe("login", () => {

    it("Exists", () => {
        expect(login).toBeDefined();
    })

    it("Is a function", () => {
        expect(login instanceof Function).toEqual(true);
    })

    



})