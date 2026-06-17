// ---------- SLIDER ----------
let messages = [
    "Welcome to Iron Diary ⚡",
    "Secure your memories like Stark Tech 🧠",
    "Your private digital vault 🔒"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % messages.length;
    document.getElementById("sliderText").innerText = messages[i];
}, 3000);


// ---------- NAVIGATION ----------
function openLogin() {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerBox").style.display = "none";
}

function openRegister() {
    document.getElementById("registerBox").style.display = "block";
    document.getElementById("loginBox").style.display = "none";
}


// ---------- REGISTER ----------
function registerUser() {

    let name = prompt("Enter your name:");

    if (!name) {
        alert("Name required");
        return;
    }

    let confirmUser = confirm("Register " + name + "?");

    if (!confirmUser) return;

    let regID = "IRON-" + Math.floor(Math.random() * 1000000);

    alert("Registration Successful!\nID: " + regID);

    openLogin();
}


// ---------- LOGIN ----------
function loginUser() {

    let user = document.getElementById("loginUser").value;

    if (!user) {
        alert("Enter username");
        return;
    }

    alert("Welcome " + user);

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("diaryBox").style.display = "block";
}


// ---------- DIARY ----------
function saveDiary() {

    let text = document.getElementById("diaryText").value;

    if (!text) {
        alert("Write something!");
        return;
    }

    let data = JSON.parse(localStorage.getItem("diary") || "[]");

    data.push(text);

    localStorage.setItem("diary", JSON.stringify(data));

    alert("Saved ⚡");

    document.getElementById("diaryText").value = "";
}


function showDiary() {

    let data = JSON.parse(localStorage.getItem("diary") || "[]");

    let output = "";

    data.forEach(d => {
        output += "<p>⚡ " + d + "</p>";
    });

    document.getElementById("entries").innerHTML = output;
}