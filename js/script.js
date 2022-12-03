

var clickp = 20;

var click = 20;

var clickh1 = 30;

var clickh2 = 40;

var clickh3 = 30;

var clickli = 27;

var span2 = 50;



$('#aumenta_font').click(function(){

    click = click + 5;

    clickh1 = clickh1 + 5;

    clickh2 = clickh2 + 5;

    clickli - clickli + 5;

    clickp = clickp + 5;

    span2 = span2 + 5;


    $("p"). css("font-size", clickp);
    $("a"). css("font-size", click);
    $('.menu'). css("font-size", clickp);
    $("h1"). css("font-size", clickh1);
    $("h2"). css("font-size", clickh2);
    $("h3"). css("font-size", clickh1);
    $("button"). css("font-size", clickp);
    $("li"). css("font-size", clickli);
    $(".span1"). css("font-size", clickp);
    $(".span2"). css("font-size", span2);

     console.log('oi coisa linda');

})


$('#diminui_font').click(function(){

  click = click - 5;

  clickh1 = clickh1 - 5;

  clickh2 = clickh2 - 5;

  clickp = clickp - 5;

  span2 = span2 - 5;

  clickli = clickli - 5;

  $("p").css("font-size", clickp);
  $("a").css("font-size", click);
  $("h1").css("font-size", clickh1);
  $("h2").css("font-size", clickh2);
  $("h3").css("font-size", clickh1);
  $("li"). css("font-size", clickli);
  $("button"). css("font-size", clickp);
  $(".span1"). css("font-size", clickp);
  $(".span2"). css("font-size", span2);

})