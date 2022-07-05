let userName = prompt('What is your name?').trim();
let lastName = prompt('What is your last name?').trim();
let email = prompt('Write your Email please!').trim().toLowerCase().replaceAll(" ","");;
let firstMailSymbol, 
    lastMailSymbol, 
    mailData;
let mailSymbol = email.indexOf('@');
let yearOfBirth = +prompt('What is your year of birth?').trim().replaceAll(" ","");
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

if (mailSymbol === -1) {
    mailData = "Email: Not valid Email: " + email + " (symbol @ is not exist)";
} else if  (email.startsWith('@')){
    mailData = "Email: Not valid email " + email + " (symbol @ find in first place)";
} else if (email.endsWith('@')){
    mailData = "Not valid Email: " + email + " (symbol @ find in last place)";
} else{
    mailData = "Email: " + email;
}

document.write(`
    <ul class= "form">
        <li>${"Full name: " + userName + " " + lastName}</li>
        <li>${mailData}</li>
        <li>${"Age: " + age}</li>
    </ul>
`);
