var bleh = UrlExists('https://github.com/alexandershoup/ewt-fa-2016/tree/master/class01/classwork', function(status){
    if(status === 200){
       return true;
    }
    else if(status === 404){
       // 404 not found
       return false;
    }
});


console.log(bleh);





function UrlExists(url, cb){
    jQuery.ajax({
        url:      url,
        dataType: 'text',
        type:     'GET',
        complete:  function(xhr){
            if(typeof cb === 'function')
               cb.apply(this, [xhr.status]);
        }
    });
}
