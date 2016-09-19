// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements

var skillsets = ['nothing', 'everything', 'all the things', 'none of the things'];

for (var i = 0; i < skillsets.length; i++) {
    var thisElement = document.createElement('li');
    thisElement.innerText = skillsets[i];
    document.body.appendChild(thisElement);
}
