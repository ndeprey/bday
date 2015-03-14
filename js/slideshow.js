

$(document).ready(function(){
 
	var imgArr = new Array( // relative paths of images
	 					'img/daytime-light.jpg',
	 					'img/ice-forest.jpg',
	 					'img/paddling.jpg',
	 					'img/springtime.jpg',
	 					'img/winter-fleet.jpg',
	 					'img/all-roads.jpg',
						'img/summer-sails.jpg'
	 );
	 
	 var preloadArr = new Array();
	 var i;
	 
	 /* preload images */
	 for(i=0; i < imgArr.length; i++){
	 preloadArr[i] = new Image();
	 preloadArr[i].src = imgArr[i];
	 }
	 
	 var currImg = 1;
	 var intID = setInterval(changeImg, 6000);
	 
	 /* image rotator */
	 function changeImg(){
	 $("html").animate({opacity: 0}, 1000, function(){
	 $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src);
	 }).animate({opacity: 1}, 1000);
	 }


 });
