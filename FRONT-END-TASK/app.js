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


//  $(function() {
//             $('input').keyup(function() {
//                 this.value = this.value.toLocaleUpperCase();
//             });
//         });