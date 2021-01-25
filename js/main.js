window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("product-logo").style.width = "100px";
  } else {
    document.getElementById("product-logo").style.width = "200px";
  }
}

function checkScroll(){
  var startY = $('.navbar').height() * 2;

  if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
  }else{
      $('.navbar').removeClass("scrolled");
  }
}

if($('.navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}

AOS.init({ disable: 'mobile', once: true });