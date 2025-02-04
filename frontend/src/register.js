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
            username: form.get("username"),
            password: form.get("password"),
            name: form.get("name"),
            surname: form.get("surname"),
            email: form.get("email")
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
