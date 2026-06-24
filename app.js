

let messages = [
    "Welcome to Iron Diary ⚡",
    "Secure your memories 🔒",
    "Your personal digital vault 🧠"
];

let index = 0;

function startSlider() {
    setInterval(() => {
        index = (index + 1) % messages.length;
        let slider = document.getElementById("sliderText");
        if (slider) {
            slider.innerText = messages[index];
        }
    }, 3000);
}

startSlider();





function generateRegID() {
    return "IRON-" + Math.floor(100000 + Math.random() * 900000);
}





function showMessage(msg) {
    let box = document.getElementById("dynamicBox");

    if (!box) {
        box = document.createElement("div");
        box.id = "dynamicBox";
        document.body.appendChild(box);
    }

    box.innerHTML = msg;
}





function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let c of cookies) {
        let [key, val] = c.trim().split("=");
        if (key === name) return val;
    }
    return "";
}





function addDiaryEntry() {
    let text = document.getElementById("diaryText");

    if (!text || text.value.trim() === "") {
        alert("Write something!");
        return;
    }

    let entry = document.createElement("p");
    entry.innerText = "⚡ " + text.value;

    document.getElementById("entries").appendChild(entry);

    text.value = "";
}


// =============================
// vi. EVENTS
// =============================

document.addEventListener("DOMContentLoaded", function () {

    let diaryBox = document.getElementById("diaryText");

    if (diaryBox) {
        diaryBox.addEventListener("focus", function () {
            showMessage("Writing mode activated ⚡");
        });
    }
});


// =============================
// vii. ALERT / PROMPT / CONFIRM
// =============================

function registerUser() {

    let name = prompt("Enter your name:");

    if (!name) {
        alert("Name required!");
        return;
    }

    let ok = confirm("Do you want to register " + name + "?");

    if (!ok) {
        alert("Cancelled");
        return;
    }

    let id = generateRegID();

    alert("Registration successful ⚡\nYour ID: " + id);

    setCookie("user", name, 7);
    setCookie("userid", id, 7);
}







function validateLogin() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    // RULE 1: empty check
    if (!email.value || !password.value) {
        alert("All fields required");
        return false;
    }

    // RULE 2: email format
    if (!email.value.includes("@")) {
        alert("Invalid email format");
        return false;
    }

    // RULE 3: password length
    if (password.value.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // RULE 4: no spaces
    if (email.value.includes(" ")) {
        alert("Email should not contain spaces");
        return false;
    }

    // RULE 5: basic domain check
    if (!email.value.includes(".")) {
        alert("Invalid email domain");
        return false;
    }

    alert("Validation successful ✔");
    return true;
}