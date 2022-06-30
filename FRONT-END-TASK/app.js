function showAlert() {
    let message = "Hello world!" 
    return alert(message);
};

function makeUpperCase() {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.toUpperCase();
        }
function makeLowerCase() {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.toLowerCase();
        } 
function makeFirstUpperCase() {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.charAt(0).toUpperCase() + text.slice(1);
        }
function makeFirstLowerCase() {
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.charAt(0).toLowerCase() + text.slice(1);
        }
function checkFormEmail() { 
    let emailValue = document.getElementById("inputEmail").value;
    let phoneValue = document.getElementById("inputPhoneNumber").value;
    if (emailValue == ""){
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
}  

function blockInput() {
    document.getElementById('blockInput').readOnly = true;
  } 
function unBlockInput() {
    document.getElementById('blockInput').readOnly = false;
  }   
