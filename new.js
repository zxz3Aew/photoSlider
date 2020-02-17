$(document).ready(function(){
  
	var slideCount = $('#sliderBoard li').length;
	var slideWidth = $('#sliderBoard li').width();
	var slideHeight = $('#sliderBoard li').height();
	var sliderUlWidth = slideCount * slideWidth; //width of ul
	
	$('#sliderBoard').css({ 
        width: slideWidth,
        height: slideHeight,
    });
	
	$('#sliderBoard ul').css({ 
        width: sliderUlWidth, 
        marginLeft: - slideWidth,
    });

    function move() {
        $('#sliderBoard li:first-child').appendTo('#sliderBoard ul');
    };

    setInterval(function(){
        move();
    }, 2000);
});    
