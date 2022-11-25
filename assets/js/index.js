$("#search-input").keyup(function () {
    clearSearch();
});

$('.menu-search .close').click(function () {
    $('#search-input').val('');
    clearSearch();
})

function clearSearch() {
    if ($('#search-input').val().length > 0) {
        $('.menu-search .close').addClass('active');
    } else {
        $('.menu-search .close').removeClass('active');
    }
}

$('.search.icon-search').click(function () {
    $('.menu-search').toggleClass('active');
    $('.full-page').toggleClass('active');
})

$('.full-page').click(function () {
    $('.menu-search').removeClass('active');
    $('.full-page').removeClass('active');
})

$('.click-tog').click(function () {
    $('.tog').toggleClass('active');
})


$('.click-tog2').click(function () {
    $('.tog2').toggleClass('active');
})