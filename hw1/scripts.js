$('.up').on('click', function () {
    $('.content').animate({'font-size': '+=5'});
    $('.content').animate({'font-size': '-=5'});
    $(".content").css("color", "#BD2D0F");
    $("img").css("border","solid 5px #BD2D0F");
});