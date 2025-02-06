const { renderDOM } = require('./helpers');

let dom;
let document;

describe('index.html', () => {
  beforeEach(async () => {
    dom = await renderDOM('./login.html');
    document = await dom.window.document;
  })
  
  it('fetches data successfully', async () => {
    // Mock fetch for this test only
    const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'mocked data' })
    });
  
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    usernameInput.value = 'testuser';
    passwordInput.value = 'password123';
    
    form.dispatchEvent(new Event('submit'));

    expect(fetchSpy).toHaveBeenCalledWith('https://learnifybackend-wvnw.onrender.com/users/login');
  
    // Cleanup after the test
    fetchSpy.mockRestore();
  });
  
})