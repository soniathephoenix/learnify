const { renderDOM } = require("./helpers"); 
let dom;
let document;

describe("login.html", () => {
  beforeEach(async () => {
    dom = await renderDOM("./login.html");
    document = dom.window.document;
  });

  it("has a username input field", () => {
    const usernameInput = document.querySelector("#username");
    expect(usernameInput).toBeTruthy();
    expect(usernameInput.tagName).toBe("INPUT"); 
    expect(usernameInput.type).toBe("text"); 
  });

  it("has a password input field", () => {
    const passwordInput = document.querySelector("#password");
    expect(passwordInput).toBeTruthy();
    expect(passwordInput.tagName).toBe("INPUT"); 
    expect(passwordInput.type).toBe("password");  
  });

  it("has a login form", () => {
    const loginForm = document.querySelector("#login-form");
    expect(loginForm).toBeTruthy();
    expect(loginForm.tagName).toBe("FORM"); 
  });

  it("has a submit button with the correct label", () => {
    const submitButton = document.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
    expect(submitButton.innerHTML.trim()).toBe("Submit"); 
  });

})