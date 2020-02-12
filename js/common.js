$(document).ready(function() {
	// Custom JS
	$('.burger-nav').click(function(event){
		$('.burger-nav,.dropdown-main,.overlay').toggleClass('active');
	});
	$('.header-search').click(function(event){
		$('.main-search,.search-overlay').toggleClass('active');
		$('.search-input').val('');
	});
	$('.add-to-cart').click(function(event){
		//$(this).toggleClass('add-to-cart-block');
		//$('.add-to-card-block', this).toggleClass('active');
		$(this).find('.add-to-cart-block').addClass('active');
	});
	$('.confirm-button').click(function(event){
		//$(this).closest('.add-to-cart-block').removeClass('active');
		$(this).parent().toggleClass('active');
		$(this).parent().addClass('inactive');
		
		e.stopPropagation();
	});
	$('.filter-widget li').click(function(event){
		$('.filter-widget li').toggleClass('active');
	});
	$(".owl-carousel").owlCarousel({
		loop:true,
		nav:true,
		responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        }
      }
	});
  $('.tab-content').hide();
  $('.tab-content:first').show();
  $('.header-tabs ul li:first').addClass('active');
  $('.header-tabs ul li').click(function(event) {
    $('.header-tabs ul li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});
