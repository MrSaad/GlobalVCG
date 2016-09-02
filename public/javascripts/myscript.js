$(function(){

	"use strict"
	
	var topoffset=0
	var wheight = $(window).height(); //height of window
	var aspectRatio = $(window).width()/$(window).height(); //aspect ratio

	//set height of main page 
	$('.page#main').css('height', wheight);
	$('.particles-js-canvas-el').css('height', $('#about').height());
	//adjust height of .fullheight elements on window resize
	$(window).resize(function() {
		wheight = $(window).height(); //get the height of the window
		$('.page#main').css('height', wheight); //set to window tallness  
		$('.particles-js-canvas-el').css('height', $('#about').height());
	});

	// fix aspect ratio of background image
	if( aspectRatio < (1920.0/1280) ){
		$("#main").css({"background-size": "auto 100%"});
	}

	 //Activate Scrollspy
	$('body').scrollspy({target: '.navbar', offset: 100});

	// add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#main') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}

	// Add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
	    if(hash !== '#main') {
	    // if ($(window).scrollTop() > 20){
			$('header nav').addClass('inbody');
	    } else {
			$('header nav').removeClass('inbody');
	    }
	});

	// arrow click
	$('.fa-angle-down').click(function(){
		$('html,body').animate({
			scrollTop: $('#about').offset().top
        }, 500);
	});

	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === 
			this.pathname.replace(/^\//,'') && 
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
		        }, 500);
		    	return false;
			} //target.length
	    } //click function
	}); //smooth scrolling)

	//add parallax to first div
	// $('.bg-1').parallax({
	// 	speed :	0.25
	// });

});

				

function initMap() {
	var mapDiv = document.getElementById('map');
	var myLatLng = {lat: 42.586213, lng: -83.145677};
	var map = new google.maps.Map(mapDiv, {
		center: myLatLng,
		zoom: 16,
		styles: map_style
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});
};


/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		    var scrollTop = $(window).scrollTop();
            	var offset = $this.offset().top;
            	var height = $this.outerHeight();
 
		    	// Check if above or below viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
		 
				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}(jQuery));

map_style = [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -78
            },
            {
                "lightness": 67
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -90
            },
            {
                "lightness": -8
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 69
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#2c2e33"
            },
            {
                "saturation": 7
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": -2
            }
        ]
    }
]	