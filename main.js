console.log('working');



$(document).ready(function () {
    // Carousel interval change
    console.log('working');
    $('.carousel').carousel({
        interval: 3000,
    });

    //Button shows under video - Button 0
    $('#galbtn').click(function () {
        $('#galexp').toggle();
        $(this).remove();
    });
    $('#galexp').toggle();

    // Button 1

    $('#galbtn1').click(function () {
        $('#galexp1').toggle();
        $(this).remove();
    });
    $('#galexp1').toggle();

    // Button 2

    $('#galbtn2').click(function () {
        $('#galexp2').toggle();
        $(this).remove();
    });
    $('#galexp2').toggle();



    // Slide Up



    /*
    $(window).on('scroll', function() {
        console.log( $(this).scrollTop() );
    });
    */
});

var ounces = 0;
while (ounces <= 8) {
    console.log('Ounces:' + ounces);
}