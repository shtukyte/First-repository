let userInfoOutput = document.getElementById('main');

let user = {
    name: 'Vardenis',
    lastname: 'Pavardenis'
}
userInfoOutput.innerHTML = 
`<h2> User information </h2>` +
`<p>Vartotojo vardas yra ${user.name}, pavarde ${user.lastname} </p>`;



