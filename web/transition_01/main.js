jQuery(document).ready(function($){
  // set some variables
  var isAnimating = false;
  var firstLoad = false;

  // DOM elements
  var navbar = $('.navbar');
  var main = $('.main');
  var menu = $('.icon');

  // element for the animation
  var loadingBar = $('#loadingBar');
  var loadingBarBot = $('#loadingBarBot');

// # 01
  // function for the click on a link on the navbar
  navbar.on('click', 'a', function(event){
    console.log("navbar link clicked");
    event.preventDefault(); // to prevent the default action of the link

    var target = $(this);
    var targetDestination = target.data('navbar');

    // check if the animation is not started yet and if clicking a page's link different from the current one
    if(!target.hasClass('active') && !isAnimating)
    {
      console.log("animation started");
      StartAnimation(targetDestination,true); // start the triggerAnimation
    }
    firstLoad = true;

  });
  // End of #01

// # 02
  //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function() {
      if( firstLoad ) {
          var newPageArray = location.pathname.split('/'),
          //this is the url of the page to be loaded
          newPage = newPageArray[newPageArray.length - 1].replace('.html', '');
          console.log(newPage);
          if( !isAnimating ) StartAnimation(newPage, false);
      }
      firstLoad = true;
  });


// start animation and loading function
function StartAnimation(destination, bool){
  isAnimating = true;
  destination = ( destination == '' ) ? 'index' : destination;
  // update navbar
  navbar.find('*[data-navbar="'+destination+'"]').addClass('active').parent('li').siblings('li').children('.active').removeClass('active');

  // Pre loading animation
  //PreLoadingAnimation();

  //in order to close the mobile if open in a mobile vieport
  if(isOpen){
    navbar.children().removeClass('responsive');
    isOpen = false;
  }


  loadingBar.animate({width:'100%'}, 400);
  loadingBar.animate({height:'50vh'}, 600);


  loadingBarBot.animate({width:'100%'}, 400);
  loadingBarBot.animate({height:'50vh'}, 600);

  //load new mainContent
  loadNewContent(destination,bool);

  // Post loading animation
  //PostLoadingAnimation();
  loadingBar.animate({height:'1.5vh'}, 600);
  loadingBar.animate({width:'0%'}, 400);

  loadingBarBot.animate({height:'1.5vh'}, 600);
  loadingBarBot.animate({width:'0%'}, 400);

  isAnimating = false;
}


// content's loading
function loadNewContent(destination,bool){
  setTimeout(function(){

    // create the new section to insert in the DOM
    var section = $('<section class="containter hidden"></section>').appendTo(main);

    // load ffrom the html file
    section.load(destination+'.html .containter > *',function(event){
        section.prev().addClass('hidden').end().removeClass('hidden');
        window.scrollTo(0,0);
        var url = destination + '.html';      
        if( url != window.location && bool){
          window.history.pushState({path: url},'',url);
        }
      }); // end of load()

  },1000); // end of setTimeout()
}
// # end of load new content


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
