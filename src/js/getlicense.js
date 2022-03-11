"use strict";

/**
 * Accordian functionality
 */
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

function spanTitle() {
    console.log($(window).width());
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

// Reasons section
(function() {
    $(".exit").hide();
  
    $(".info").hide();
  
    $(function() {
      var open;
      open = true;
      return $(".info-card").click(function() {
        if (open) {
          $(this).siblings().removeClass("full");
          $(this).addClass("full");
          $(this).removeClass("side");
          $(this).siblings().addClass("side");
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
          $(this).siblings().removeClass("side");
          $(this).find(".exit").css("display", "none");
          $(".info").hide();
          return open = !open;
        }
      });
    });
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFBOztFQUNBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxJQUFYLENBQUE7O0VBQ0EsQ0FBQSxDQUFFLFFBQUEsQ0FBQSxDQUFBO0FBQ0YsUUFBQTtJQUFFLElBQUEsR0FBTztXQUVQLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxLQUFoQixDQUFzQixRQUFBLENBQUEsQ0FBQTtNQUNwQixJQUFHLElBQUg7UUFDRSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsUUFBTCxDQUFBLENBQWUsQ0FBQyxXQUFoQixDQUE0QixNQUE1QjtRQUNBLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxRQUFMLENBQWMsTUFBZDtRQUNBLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxXQUFMLENBQWlCLE1BQWpCO1FBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLFFBQUwsQ0FBQSxDQUFlLENBQUMsUUFBaEIsQ0FBeUIsTUFBekI7UUFDQSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsSUFBTCxDQUFVLE9BQVYsQ0FBa0IsQ0FBQyxHQUFuQixDQUF1QixTQUF2QixFQUFrQyxRQUFsQztRQUNBLENBQUEsQ0FBRSxPQUFGLENBQVUsQ0FBQyxJQUFYLENBQUE7ZUFDQSxJQUFBLEdBQU8sQ0FBQyxLQVBWO09BQUEsTUFBQTtRQVNFLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxRQUFMLENBQUEsQ0FBZSxDQUFDLFdBQWhCLENBQTRCLE1BQTVCO1FBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLFdBQUwsQ0FBaUIsTUFBakI7UUFDQSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsV0FBTCxDQUFpQixNQUFqQjtRQUNBLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxRQUFMLENBQUEsQ0FBZSxDQUFDLFdBQWhCLENBQTRCLE1BQTVCO1FBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLElBQUwsQ0FBVSxPQUFWLENBQWtCLENBQUMsR0FBbkIsQ0FBdUIsU0FBdkIsRUFBa0MsTUFBbEM7UUFDQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsSUFBWCxDQUFBO2VBQ0EsSUFBQSxHQUFPLENBQUMsS0FmVjs7SUFEb0IsQ0FBdEI7RUFIQSxDQUFGO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiLmV4aXRcIikuaGlkZSgpXG4kKFwiLmluZm9cIikuaGlkZSgpXG4kIC0+XG4gIG9wZW4gPSB0cnVlXG4gIFxuICAkKFwiLmluZm8tY2FyZFwiKS5jbGljayAtPlxuICAgIGlmIG9wZW5cbiAgICAgICQoQCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhcImZ1bGxcIilcbiAgICAgICQoQCkuYWRkQ2xhc3MoXCJmdWxsXCIpXG4gICAgICAkKEApLnJlbW92ZUNsYXNzKFwic2lkZVwiKVxuICAgICAgJChAKS5zaWJsaW5ncygpLmFkZENsYXNzKFwic2lkZVwiKVxuICAgICAgJChAKS5maW5kKFwiLmV4aXRcIikuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZVwiKVxuICAgICAgJChcIi5pbmZvXCIpLnNob3coKVxuICAgICAgb3BlbiA9ICFvcGVuXG4gICAgZWxzZVxuICAgICAgJChAKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKFwiZnVsbFwiKVxuICAgICAgJChAKS5yZW1vdmVDbGFzcyhcImZ1bGxcIilcbiAgICAgICQoQCkucmVtb3ZlQ2xhc3MoXCJzaWRlXCIpXG4gICAgICAkKEApLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoXCJzaWRlXCIpXG4gICAgICAkKEApLmZpbmQoXCIuZXhpdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKVxuICAgICAgJChcIi5pbmZvXCIpLmhpZGUoKVxuICAgICAgb3BlbiA9ICFvcGVuXG5cbiJdfQ==
  //# sourceURL=coffeescript