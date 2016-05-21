function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "images/img"+ imageCount +".jpg";
	clearInterval(time); 								
	time =  window.setInterval(function photoA() { 
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "images/img"+ imageCount +".jpg";
	},4000);
	}
 
var time = window.setInterval(function photoA() {   
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}
	image.src = "images/img"+ imageCount +".jpg";
	},4000);