//baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

const gallery = document.querySelector('#gallery');

for (let i=1; i<=12; i++) {
	gallery.innerHTML +=
	`<a href="photos/thumbnails/${i}.jpg"><img src="photos/thumbnails/${i}.jpg"></a>`
}