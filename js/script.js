$(document).ready(function(){

});
// wow
new WOW().init();

// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	  percentPosition: true
	});

	// filter items on button click
	$('.filter-links').on( 'click', 'a', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});