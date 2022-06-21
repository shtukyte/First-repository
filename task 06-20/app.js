function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}



let form = document.querySelector('form');
let firstName = document.querySelector('#fName');
let lastName = document.querySelector('#lName');
let phoneNumber = document.querySelector('#phoneNumber');
let emailAdress = document.querySelector('#emailAdress');
let message = 'Form submited successfully';

function subFormChecker() {
    if (firstName.value == "" || lastName.value == "" ||
        phoneNumber.value == "" || emailAdress.value == "") {
            alert('Please fill all fields!');
            return false;
        }
    if (true) {    
    let msg = document.querySelector('#message');
    msg.textContext = message;
    msg.style.paddingBottom = '50px'
    msg.scrollIntoView();
    }
}    







