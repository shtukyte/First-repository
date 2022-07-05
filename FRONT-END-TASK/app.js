showAlert?.addEventListener('click', function () {
    let message = "Hello world!"
    return alert(message);
});

makeUpperCase?.addEventListener('click', function () {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.toUpperCase();
});
makeLowerCase?.addEventListener('click', function () {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.toLowerCase();
});
makeFirstUpperCase?.addEventListener('click', function () {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.charAt(0).toUpperCase() + text.slice(1);
});
makeFirstUpperCase?.addEventListener('click', function () {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.charAt(0).toLowerCase() + text.slice(1);
});
submitFormBtn?.addEventListener('click', function () {
    let emailValue = document.getElementById("inputEmail").value;
    let phoneValue = document.getElementById("inputPhoneNumber").value;
    if (emailValue == "") {
        emailError.textContent = "Please check email adress"
        emailError.style.color = "red"
    }
    else if (phoneValue == "") {
        phoneError.textContent = "Please check phone number"
        phoneError.style.color = "red"
    }
    else {
        phoneError.textContent = ""
        emailError.textContent = ""

    }
});

blockInput?.addEventListener('click', function () {
    document.getElementById('secInput').readOnly = true;
});
unBlockInput?.addEventListener('click', function () {
    document.getElementById('secInput').readOnly = false;
});

document.getElementById('image').addEventListener('mouseenter', mouseOn);
function mouseOn() {
    document.getElementById('image').setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
};
document.getElementById('image').addEventListener('mouseleave', mouseOff);
function mouseOff() {
    document.getElementById('image').setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
};
let pointer = document.querySelector('#pointerCursor');
let textCursor = document.querySelector('#textCursor');
let copy = document.querySelector('#copyCursor');
let help = document.querySelector('#helpCursor');
let crosshair = document.querySelector('#crosshairCursor');

let changeText = document.querySelector('#text');
let redColor = document.querySelector('#colorRed');
let greenColor = document.querySelector('#colorGreen');
let blueColor = document.querySelector('#blueColor');

let redBorder = document.querySelector('#borderRed');
let greenBorder = document.querySelector('#borderGreen');
let blueBorder = document.querySelector('#borderBlue');

let resetAll = document.querySelector('#resetAll')

pointerCursor?.addEventListener('click', function (e) {
    document.body.style.cursor = 'pointer';
    e.preventDefault();
});
textCursor?.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.cursor = 'text';
});
copyCursor?.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.cursor = 'copy';
});
fooCursor?.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.cursor = 'foo';
});
helpCursor?.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.cursor = 'help';
});
crosshairCursor?.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.cursor = 'crosshair';
});
colorRed?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.color = 'red';
});
colorGreen?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.color = 'green';
});
colorBlue?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.color = 'blue';
});
redBorder?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.outline = '1px solid red';
});
greenBorder?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.outline = '1px solid green';
});
blueBorder?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.outline = '1px solid blue';
});
resetAll?.addEventListener('click', function (e) {
    e.preventDefault();
    changeText.style.color = 'black';
    changeText.style.outline = 'none';
    document.body.style.cursor = 'auto';
});