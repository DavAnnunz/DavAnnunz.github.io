$(document).ready(function() {

// smooth scrolling ====================== =====================================

  var scrollLink = $('.scroll');

  // smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();

    // close the menu in responsive view
    if(isOpen){    
      navbar.children().removeClass('responsive');
      isOpen = false;
    }


    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 20
    }, 1000);
  });

  // active link switching
  $(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    //console.log(scrollBarLocation)

    scrollLink.each(function(){

      var sectionOffset = $(this.hash).offset().top -25;
      if (sectionOffset <= scrollBarLocation)
      {
        $(this).parent().siblings().removeClass('nav-active');
        $(this).parent().addClass('nav-active');
      }
    });
  });


function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
  }



// responsive menu opening and closin ===========================================
var navbar = $('.navbar');
var menu = $('.icon');
var isOpen = false;
// function to opne the mobile navbar
menu.on('click', 'a', function(event){
  if(!isOpen)
  {
    navbar.children().addClass('responsive');
    isOpen = true;
  }
  else
  {
    navbar.children().removeClass('responsive');
    isOpen = false;
  }
});


});
