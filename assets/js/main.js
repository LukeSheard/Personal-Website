(function(i,s,o,g,r,a,m){
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
  a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];
  a.async=1;
  a.src=g;
  m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-49746829-1', 'auto');
	ga('send', 'pageview');

var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-49746829-1']);
  	_gaq.push(['_trackPageview']);

  	(function() {
    	var ga = document.createElement('script'); 
      ga.type = 'text/javascript'; 
      ga.async = true;
    	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    	
      var s = document.getElementsByTagName('script')[0]; 
      s.parentNode.insertBefore(ga, s);
  	})();

function people(like){
    if(like === 0){
      return "Please consider liking this!"
    } else if(like === 1){
      return "Thankyou for liking this!";
      // return like + " person likes this!"
    } else{
      return like + " people like this!";
    }
  };

$(document).ready(function(){
  initialize();

  var path = window.location.pathname;
  if( path == "/"){
    path = "home";
  } else {
    path = path.split( '/' );
    path = path[1]
  }

  $("#navbar").children('li').each(function () {
    var navItem =$(this)
    navItem.children("a").each(function(){
      var $item = $(this);
      var id = $item.attr('id').toLowerCase();
      if(id == path){
        navItem.children('a').addClass("activeItem");
      }
    })

    $('a').each(function(){
      var href = $(this).attr('href');
      href = href.toLowerCase()
      $(this).attr('href', href);
      
    });
  });

  var title = document.getElementById("PageTitle").innerHTML;
  if (title === "Resume") {
    var $ul = $('.skills')
          var $liArr = $ul.children('li');
          
          $liArr.sort(function(a,b){
          var temp = parseInt( Math.random()*10 );
          var isOddOrEven = temp%2;
          var isPosOrNeg = temp>5 ? 1 : -1;
          return( isOddOrEven*isPosOrNeg );
          })
          .appendTo($ul);
  } 

  var offset = 400;
  var duration = 500;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(duration);
      } else {
          $('.back-to-top').fadeOut(duration);
      }
  });
  
  $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 2* duration);
      return false;
  })
});

$(window).load(function(){
  var now = new Date();
  now = now.getTime();

  if(Date.parse(localStorage.date) !== null){
    var date = Date.parse(localStorage.date);
    var difference = now - date;
    difference = difference / 86400000;
      if(difference > 1){
      $('#myModal').modal('show');
    }
  } else {
    $('#myModal').modal('show');
  }
  
  localStorage.date = new Date();
});