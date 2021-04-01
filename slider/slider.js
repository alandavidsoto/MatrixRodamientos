var indice = 0;
$(".paginacion li").eq(indice).css("background-color", "rgb(2, 67, 124)");
$(".paginacion li").click(function () {

    indice = $(this).index();
    $(".paginacion li").css("background-color", "rgb(63, 112, 155)");
    $(this).css("background-color", "rgb(2, 67, 124)");
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
});
setInterval(function () {
    indice++;
    if (indice > 2) {
        indice = 0;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color", "rgb(63, 112, 155)");
    $(".paginacion li").eq(indice).css("background-color", "rgb(2, 67, 124)");
}, 10000);
$(".derecha").click(function () {
    indice++;
    if (indice > 2) {
        indice = 0;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color", "rgb(63, 112, 155)");
    $(".paginacion li").eq(indice).css("background-color", "rgb(2, 67, 124)");
});
$(".izquierda").click(function () {
    indice--;
    if (indice < 0) {
        indice = 2;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color", "rgb(63, 112, 155)");
    $(".paginacion li").eq(indice).css("background-color", "rgb(2, 67, 124)");
});