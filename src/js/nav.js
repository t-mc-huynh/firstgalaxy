"use strict";

// Start of Back to Top functions
var mybutton = document.getElementById("backToTop");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    // Back to Top button onclick function
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// End

// FAQ accordian
$(function() {
    $('.accordian li').on('click', function() {
        if ($(this).find('ul').hasClass('open')) {
            $('ul.open').slideToggle().removeClass('open');
            $('.accordian h3 span').removeClass('closed');
            $('.accordian h3').removeClass('closed');
        } else {
            $('ul.open').slideToggle().removeClass('open');
            $(this).find('ul').slideToggle().addClass('open');
            $('.accordian h3, .accordian h3 span').removeClass('closed');
            $(this).find('h3, h3 span').addClass('closed')
        }
    });
    // Active class starts one open
    $('.accordian li.active ul').slideDown().addClass('open');
});

// End