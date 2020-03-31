$(document).on("scroll", function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();


    const $s3 = $('.s3');
    const s3FromTop = $s3.offset().top;
    const s3Height = $s3.outerHeight();


    if (scrollValue >= s3FromTop + s3Height - windowHeight) {
        $('#circleBar span').addClass('active');
        $('.round').circleProgress({
            fill: {
                color: '#3f3b4e'
            }
        }).on('circle-animation-progress', function (event, progress, stepValue) {

            $(this).find('strong').text(Math.round(parseFloat(stepValue * 100)) + '%')
        });
    }

    if (scrollValue < s3FromTop + s3Height - windowHeight) {
        $('#circleBar span').removeClass('active');
    }

})