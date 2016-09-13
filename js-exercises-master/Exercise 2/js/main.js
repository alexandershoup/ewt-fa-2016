// ---------------------------------------
// Exersize 2: Complete this daysOfTheWeek array to include all 7 days
// hint: use splice, push, and unshift

var daysOfTheWeek = ['Tuesday', 'Wednesday', 'Friday', 'Saturday'];
daysOfTheWeek.unshift('Monday');
daysOfTheWeek.unshift('Sunday');
daysOfTheWeek.splice(4,0,'Thursday');

// do not touch or write past this line
$('body').append('<h1>' + daysOfTheWeek.join(', ') + '</h1>');
