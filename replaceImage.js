Replaces all images on a page 

Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
	el.src = 'https://www.link-to-your-image.png';
});