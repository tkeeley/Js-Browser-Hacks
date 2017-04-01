Fun Javascript snippets you can paste in the address bar of your web browser to make things happen to the page. This is only affecting your view of the page. You’re not actually messing up the page.

To make these work, paste the string of code in the web address of a loaded web page. Then go to the beginning of the string and type-    javascript:  

Then press enter and enjoy.

example of what should be in the address bar- 
javascriptArray.prototype.slice.call(document.querySelectorAll('img')).map(function(el){el.src = ‘link to image';});
