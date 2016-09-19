// ---------------------------------------
// Exersize 1: define the following 5 variables, give them values.
// firstName, lastName, myLove
// append them to the following css classnames found in the DOM using jQuery
// .first-name
// .last-name
// .my-love
var firstName = "Alexander";
var lastName = "Shoup";
var myLove = "Pizza";

// document.querySelector('.first-name').innerText = firstName;
document.querySelector('.last-name').innerText = lastName;
document.querySelector('.my-love').innerText = myLove;

$('.first-name').append(firstName);
