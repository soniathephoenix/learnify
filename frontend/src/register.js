document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           // firstName: form.get("firstName"),
           // secondName: form.get("secondName"),
            username: form.get("username"),
            //email: form.get("email"),
            password: form.get("password")
        })
    };

    const response = await fetch("https://learnifybackend-wvnw.onrender.com/users/register", options);
    const data = await response.json();

    if (response.ok) {
        window.location.assign("login.html");
    } else {
        alert(data.error);
    }
});
