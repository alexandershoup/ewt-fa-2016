// ---------------------------------------
// Exersize 3: Create an object with your firstName and lastName
// append them to the html using jQuery
//
// syntax for an object:
// var obj = {};
var obj = {
    firstName:'Alexander',
    lastName:'Shoup'
};
document.querySelector('.first-name').innerText=obj.firstName;
document.querySelector('.last-name').innerText=obj.lastName;
