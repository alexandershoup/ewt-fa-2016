var gallery = document.querySelector('.gallery');

function jsonFlickrApi (data) {
	// console.log(data);

	var list = document.createElement('ul');

// http://librdf.org/flickcurl/api/flickcurl-searching-search-extras.html

	for (var i = 0; i < data.photos.photo.length; i++) {
		var data_object = data.photos.photo[i];
		// console.log(data_object);

		var list_item = document.createElement('li');
		var h1 = document.createElement('h1');
		var h2 = document.createElement('h2');
		var flickr_link = document.createElement('a');
		var figure = document.createElement('figure');
		var img_link = document.createElement('a');
		var img = document.createElement('img');
		var figcaption = document.createElement('figcaption');
		var time = document.createElement('time');

		h1.innerText = data_object.title;
		flickr_link.innerText = data_object.ownername;
		flickr_link.href = "http://flickr.com/photos/" + data_object.pathalias;
		img_link.href = data_object.url_o;
		img.src = data_object.url_q;
		figcaption.innerHTML = data_object.description._content + "<br>";
		time.dateTime = data_object.datetaken;
		time.innerText = data_object.datetaken;


		img_link.appendChild(img);
		h2.appendChild(flickr_link);
		figure.appendChild(img_link);
		figcaption.appendChild(time);
		figure.appendChild(figcaption);
		list_item.appendChild(h1);
		list_item.appendChild(h2);
		list_item.appendChild(figure);
		list.appendChild(list_item);
	}

	gallery.appendChild(list);
}
