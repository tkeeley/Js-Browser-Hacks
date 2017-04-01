// Flips images on page 3 seconds after action on page

	setTimeout(function(){
	document.onmousemove = document.onkeypress = function(){
		['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el){
		el.style[prefix + 'transform'] = 'rotate(180deg)';
	});
});
	}
}, 3000);
