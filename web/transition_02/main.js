jQuery(document).ready(function($){

  var navbar =  $('.navbar');
  var arrow = $('.navbar  > .navbar-trigger');
  var navbarContent = $('.navbar > .navbar-content');
  var mainContent = $('.main');

  var extended = false;

  // if click on hte arrov to open the sidebar
  arrow.on('click', 'a',function(event){
    event.preventDefault();// to prevent the default action

    // if closed open the sidebar
    if(!extended)
    {
      OpenSidebar();
    }
    // if opened yet, close it
    else
    {
      CloseSidebar();
    }
  });

  // if click on a link od the sidebar
  navbarContent.on('click', 'a',function(event){
    event.preventDefault();// to prevent the default action

    // get the destination
    var target = $(this);
    var targetDestination = target.data('link');

    // if a new destination loade new content and close the navbar
    if(!target.hasClass('active'))
    {
      LoadNewContent(targetDestination, true);
      CloseSidebar();
    }
    //if it is the active one, just close the sidebar
    else
    {
      CloseSidebar();
    }
  });


// FOR PRESSING BACK
  $(window).on('popstate', function() {

        var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded
        newPage = newPageArray[newPageArray.length - 1].replace('.html', '');

        console.log(newPage);
        LoadNewContent(newPage, false);
  });




// loading and replace with animation of new content
  function LoadNewContent(destination, bool){
    // loading + closing animation
    mainContent.animate({opacity:'0.0'},500, function(){
      mainContent.load(destination+'.html .main > *');
      setTimeout(function(){
        mainContent.animate({opacity:'1.0'},500);
      },500);
    });

    // update active link SideBar
    navbarContent.find('*[data-link="'+destination+'"]').addClass('active').parent('li').siblings('li').children('.active').removeClass('active');
    window.scrollTo(0,0);
    // change history
    var url = destination + '.html';
    if( url != window.location && bool){
      window.history.pushState({path: url},'',url);
    }
  }


  // open the sidebar
  function OpenSidebar(){

    if( $(window).width() < 750 )
      var sidebarWidth = '100%';
    else
      var sidebarWidth = '30%';

      navbar.animate({height:'100%'}, 500, function(){
        arrow.toggleClass('rotated');
        arrow.removeClass('not-rotated');
        mainContent.animate({opacity:'0.4'},500);
      });

      navbar.animate({width: sidebarWidth}, 500, function(){
        navbarContent.css('display', 'block');
        navbarContent.animate({opacity:'1.0'}, 500);
      });


    extended = true;
  };

// close the sidebar
function CloseSidebar(){

      navbarContent.animate({opacity:'0.0'}, 500,function(){
      navbarContent.css('display', 'none');
      mainContent.animate({opacity:'1.0'},500);
      navbar.animate({width:'1.5em'}, 500, function(){
        arrow.toggleClass('rotated');
        arrow.toggleClass('not-rotated');
      });
      navbar.animate({height:'2em'}, 500);
    });
    extended = false;
  }





});
