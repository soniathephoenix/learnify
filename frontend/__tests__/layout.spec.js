// __tests__/login.spec.js
const { JSDOM } = require('jsdom');
const fs = require('fs');

test('login form is rendered correctly', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if form and input fields are present
    expect(document.querySelector('#username')).not.toBeNull();
    expect(document.querySelector('#password')).not.toBeNull();
    expect(document.querySelector('#login-form')).not.toBeNull();
});

test('submit button is present', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if submit button is present
    expect(document.querySelector('button[type="submit"]')).not.toBeNull();
});

test('register button is present', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if register button is present
    expect(document.querySelector('#registerBtn')).not.toBeNull();
});

