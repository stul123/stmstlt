$('.text table').wrap('<div class="scrolled"></div>');

$('.showlevel').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('active');
});

$('.menuopen').on('click', function() {
    $(this).toggleClass('show');
    $('.mobilemenu').toggleClass('show')
});

$('.js-current-year').text(new Date().getFullYear());

$('.subfooter .viblock').each(function() {
    if ($(this).find('.js-current-year').length) {
        return;
    }

    this.innerHTML = this.innerHTML.replace(/\b\d{4}\b/, new Date().getFullYear());
});

$(window).on('scroll', function() {
    let scrolltop_btn = $('#vtop');
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        scrolltop_btn.addClass('active');
    } else {
        scrolltop_btn.removeClass('active');
    }
});
