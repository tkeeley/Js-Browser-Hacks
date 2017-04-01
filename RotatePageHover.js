// Rotates the page 3 seconds after action on page

setTimeout(function(){
	document.onmousemove = document.onkeypress = function(){
		['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
			document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
			document.body.style[prefix + 'transform'] = 'rotate(180deg)';
		});
	}
}, 3000);