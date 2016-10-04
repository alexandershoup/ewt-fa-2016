$(document).ready(function () {
    var url = 'https://api.github.com/repos/alexandershoup/ewt-fa-2016/contents' + token;
    $.getJSON(url, pageLoader);
});

var token = "";

$.ajaxSetup({
async: false
});

    var level = 0;
    var pagecontent = [];


    // submitHelper(data, 0);
    //
    //
    // function submitHelper(data, pos) {
    //   if (pos >= data.length) {
    //     return;
    //   }
    //   $.getJSON(..., done: function(itemData) {
    //
    //     submitHelper(data, pos++);
    //     }


function pageLoader(data) {
    // var brk = document.createElement('br');
    // document.querySelector('.page-content').appendChild(brk);
    // console.log(level);
    // console.log(data);
    // level = 0;
    for (var i = 0; i < data.length; i++) {
        pagecontent[pagecontent.length] = data[i].name;
        // level++;
        var item = data[i];
        // console.log(item);
        var container = document.createElement('div');
        var html_link = document.createElement('a');
        if (item.type == 'file') {
            html_link.href = item.html_url;
        }
        html_link.href = item.html_url;
        html_link.innerText = item.name;
        if (item.type == 'dir') {
            html_link.innerText += "/";
            // var indent = document.createElement('span');
            // indent.innerText = "\n" + " " + " ";
            // document.querySelector('.page-content').appendChild(indent);
        }
        var headline = document.createElement('h3');
        headline.appendChild(html_link);
        container.appendChild(headline);
        container.className = "_" + level;
        document.querySelector('.page-content').appendChild(container);
        if (item.type == 'dir') {
            level++;
            var url = item.url;
            url = url.slice(0, url.length-11)
            // console.log(url);
            $.getJSON((url + token), pageLoader);
            level = level - 1;
        }
    }
}
