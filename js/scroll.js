$('.nav-bar nav a').on("click", function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

$('.portfolio-btn').on("click", function () {
    $('body, html').animate({
        scrollTop: $('#portfolio').offset().top
    })
})

$('.nav-mobile nav a').on("click", function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


lightbox.option({
    'albumLabel': "Zdjęcie %1 z %2"
})