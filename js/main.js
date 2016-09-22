$(document).ready(function () {
    var url = 'https://api.github.com/repos/alexandershoup/ewt-fa-2016/contents/';
    $.getJSON(url, pageLoader);
});

    var level = 0;
    var pagecontent = [];

function pageLoader(data) {
console.log(level);
    console.log(data);
    level = 0;
    for (var i = 0; i < data.length; i++) {
        pagecontent[pagecontent.length] = data[i].name;
        level++;
        var item = data[i];
        console.log(item);
        var container = document.createElement('div');
        var html_link = document.createElement('a');
        html_link.href = item.html_url;
        html_link.innerText = item.name + " " + level;
        var headline = document.createElement('h3');
        headline.appendChild(html_link);
        container.appendChild(headline);
        document.querySelector('.page-content').appendChild(container);

        if (item.type == 'dir') {
            // level++;
            $.getJSON(item.url, pageLoader);
        }
    }
}
