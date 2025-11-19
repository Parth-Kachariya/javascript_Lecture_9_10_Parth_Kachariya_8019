//  JQuery 

$(document).ready(function () {
  $("#hide").click(function () {
    $("h3").hide();
  });
});

$(document).ready(function () {
  $("#show").click(function () {
    $("h3").show();
  });
});
{
  $("#toggle").click(function () {
    $("h3").toggle();
  });

      // method 2

  // $(function () {
  //   $("#toggle").click(function () {
  //     $("h3").toggle();
  //   });
  // });
}


/* Fade Effect in Jquery */

$(function(){
  $('#fadein').click(() => {
    $("#1").fadeIn(4000)
  })
})

$(function(){
  $('#fadeout').click(() => {
    $("#2").fadeOut(4000 , () => {
      // alert('Element Remove Useing FadeOut!!')
    })
  })
})

$(function(){
  $('#fadetoggle').click(() => {
    $("#3").fadeToggle(2000)
  })
})


$(function(){
  $('#fadeto').click(() => {
    $("#1").fadeTo(1000 , 0.1)
    $("#2").fadeTo(1000 , 0.2)
    $("#3").fadeTo(1000 , 0.3)
    $("#4").fadeTo(1000 , 0.4)
    $("#5").fadeTo(1000 , 0.5)
    $("#6").fadeTo(1000 , 0.6)
  })
})

/* jQuery Slide Effect Self Study */
{
  $(function(){
    $('#slideDown').click(() => {
      $('#panel').slideDown(1000)
    })
  })
  $(function(){
    $('#slideUp').click(() => {
      $('#panel').slideUp(1000)
    })
  })
  $(function(){
    $('#slideToggle').click(() => {
      // $('#panel').slideToggle("slow")
      $("#panel").slideToggle("slow")
    })
  })
}


/*  Animation Effect */

$(function(){
  $('.animation').click(function(){
    $(this).hide()
  })
})

$(function(){
  $('#btn').click(function(){
    $('.animation').css('fontSize' , "30px")
  })
})


$(function(){
  $('#btn').click(function(){
    $('.animation').css({
      'fontSize':"40px",
      'color':"white"
    })
  })
})

$(function(){
  $('#btn').click(function(){
    $('.animation').animate({'left':"800px"} , 8000)
  })
})