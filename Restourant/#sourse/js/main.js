$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow: 2,
		responsive:[
			{
				breakpoint:994,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.header__burger').click(function(event){
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



