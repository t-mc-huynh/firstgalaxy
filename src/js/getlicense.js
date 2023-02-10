"use strict";


/* This is a jQuery function that is being called on the accordian li elements. It is adding a click
event listener to each li element. When the li element is clicked, it checks to see if the ul
element has the class 'open'. If it does, it removes the class 'open' and removes the class 'closed'
from the h3 and h3 span elements. If the ul element does not have the class 'open', it adds the
class 'open' to the ul element and adds the class 'closed' to the h3 and h3 span elements. */
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

window.onload = spanTitle();

$(window).resize(spanTitle);

/**
 * The function is called when the window is resized. It checks the width of the window and changes the
 * text of the span element to match the width of the window
 */
function spanTitle() {
    // console.log("window width ", $(window).width());
    var span = document.getElementById("timeline-span");
    if ($(window).width() < 420) {
        span.innerHTML = "Start Today";
        span.nextSibling.nextSibling.innerHTML = span.innerHTML;
        document.querySelector(".graphic-container").previousElementSibling.firstChild.nextSibling.innerHTML = "First Galaxy Inc";
    } else if ($(window).width() >= 975 && $(window).width() < 1118) {
        span.innerHTML = "Start Today";
    } else if ($(window).width() > 1500 || $(window).width() < 975) {
        span.innerHTML = "Change Your Life Today";
    } else {
        span.innerHTML = "Change Your Life";
    }
}

// Reasons section ================================================================================

(function() {
    $(".exit").hide();
  
    $(".info").hide();
  
    /* This is a jQuery function that is being called on the info-card div elements. It is adding a
    click
    event listener to each div element. When the div element is clicked, it checks to see if the
    open
    variable is true. If it is, it removes the class 'full' from the siblings of the div element,
    adds the
    class 'full' to the div element, removes the class 'side' from the div element, adds the class
    'side'
    to the siblings of the div element, hides the fa element, adds the class 'exit' to the div
    element,
    adds the class 'exit' to the div element, adds the class 'exit' to the div element, adds the
    class 'exit'
    to the div element, shows the info element, and sets the open variable to false. If the open
    variable
    is false, it removes the class 'full' from the siblings of the div element, removes the class
    'full'
    from the div element, removes the class 'side' from the div element, shows the fa element,
    removes the
    class 'side' from the siblings of the div element, removes the class */
    $(function() {
      var open;
      open = true;
      return $(".info-card").click(function() {
        if (open) {
          $(this).siblings().removeClass("full");
          $(this).addClass("full");
          $(this).removeClass("side");
          $(this).siblings().addClass("side");
          $(this).find(".fa").hide();
          $(this).find(".exit").css("display", "inline");
          $(this).find(".exit").css("position", "absolute");
          $(this).find(".exit").css("right", "1rem");
          $(this).find(".exit").css("top", "6rem");
          $(".info").show();
          return open = !open;
        } else {
          $(this).siblings().removeClass("full");
          $(this).removeClass("full");
          $(this).removeClass("side");
          $(this).find(".fa").show();
          $(this).siblings().removeClass("side");
          $(this).find(".exit").css("display", "none");
          $(".info").hide();
          return open = !open;
        }
      });
    });
  
  }).call(this);
