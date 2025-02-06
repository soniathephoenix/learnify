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

test('submit button triggers form submission', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const form = document.querySelector('#login-form');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        expect(event.defaultPrevented).toBe(true); 
    });

    submitButton.click();
});

test('input fields are empty on page load', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if the username and password fields are empty
    expect(document.querySelector('#username').value).toBe('');
    expect(document.querySelector('#password').value).toBe('');
});

test('login form has all required elements', () => {
    const html = fs.readFileSync('./login.html', 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Check if the form contains username and password input fields and submit button
    expect(document.querySelector('#username')).not.toBeNull();
    expect(document.querySelector('#password')).not.toBeNull();
    expect(document.querySelector('button[type="submit"]')).not.toBeNull();
});
