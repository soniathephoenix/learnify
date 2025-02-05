global.fetch = jest.fn().mockResolvedValue({
    ok: true, 
    json: async () => ({ token: 'fakeToken' })
  });
  
  const { JSDOM } = require('jsdom');
  const path = require('path');
  
  const renderDOM = async (filename) => {
    const filePath = path.join(process.cwd(), filename);
    const dom = await JSDOM.fromFile(filePath, {
      runScripts: 'dangerously',
      resources: 'usable',
    });
  
    return new Promise((resolve) => {
      dom.window.document.addEventListener('DOMContentLoaded', () => {
        resolve(dom);
      });
    });
  };
  
  test('login form triggers fetch on submit', async () => {
    const dom = await renderDOM('./login.html');
    const document = dom.window.document;
  
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    usernameInput.value = 'testuser';
    passwordInput.value = 'password123';
    
    form.dispatchEvent(new dom.window.Event('submit'));
    
    expect(fetch).toHaveBeenCalledWith(
      "https://learnifybackend-wvnw.onrender.com/users/login", 
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
        }),
        body: expect.stringContaining('testuser')
      })
    );
  });
  