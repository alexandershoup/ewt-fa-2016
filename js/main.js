$(document).ready(function () {
    var url = 'https://api.github.com/repos/alexandershoup/ewt-fa-2016/contents' + token;

    $.getJSON(url, pageLoader);
});

var token = "";
var pagecontent = [];

function pageLoader(data) {
    for (var i = 0; i < data.length; i++) {
        pagecontent[pagecontent.length] = data[i].name;
        var item = data[i];
        var id = item.path.replace(/\//g,"__");
        var container = document.createElement('div');
        var html_link = document.createElement('a');
        if (item.type == 'file') {
            html_link.href = item.html_url;
        }
        html_link.href = item.html_url;
        html_link.innerText = item.name;
        if (item.type == 'dir') {
            html_link.innerText += "/";
        } else {
            html_link.href = "https://alexandershoup.github.io/ewt-fa-2016/" + item.path;
        }
        var headline = document.createElement('span');
        headline.appendChild(html_link);
        container.appendChild(headline);
        container.className += " " + item.type;
        container.id = id;
        if (item.path == item.name) {
            if (item.type == "dir") {
                document.querySelector('.page-content').appendChild(container);
            }
        } else {
            var pathid = id.replace(("__"+item.name),"");
            document.getElementById(pathid).appendChild(container);
        }
        if (item.type == 'dir') {
            var url = item.url;
            // url = url.slice(0, url.length-11)
            $.getJSON((url + token), pageLoader);
        }
    }
}
