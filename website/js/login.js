function loginValidation(event) {
    event.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        alert("Login berhasil!");
        window.location.href = "menu.html";
        return true;
    } else {
        alert("Username atau password salah!");
        return false;
    }
}
