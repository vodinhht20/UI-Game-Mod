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

$('.box-collapse .nav-dropdown li').click(function (e) {
    let tabName = e.target.getAttribute('data-name');
    $('.wrapper-game-app-page #wrapper-tabs .tab-pane').removeClass(['active', 'show']);
    $(`#${tabName}`).addClass(['active', 'show']);
    putParam('tab-game', tabName);
    activedItemByParameter('tab-game', '.wrapper-game-app-page .box-collapse .nav-dropdown li', 'data-name', ['active']);
})

function activedItemByParameter(name, className, dataElementName, addClass = ['active', 'show']) {
    let currentTab = getParameter(name);
    if (!currentTab) return;

    let addedClass = '';
    $(className).removeClass(addClass);
    $(className).addClass(function(index) {
        let dataElementValue = document.querySelectorAll(className)[index].getAttribute(dataElementName);
        if (dataElementValue == currentTab) {
            return addClass.join(' ');
        }
        return addedClass;
    });

    activeParentByItem('#header-tab-nav .nav-item', 'li');
}

activedItemByParameter('tab-game', '.wrapper-game-app-page #wrapper-tabs .tab-pane', 'id');
activedItemByParameter('tab-game', '.wrapper-game-app-page .box-collapse .nav-dropdown li', 'data-name', ['active']);

function getParameter(keyParam) {
    var params = (new URL(document.location)).searchParams;
    return params.get(keyParam);
}

function putParam(key, value) {
    var urlParam = new URL(window.location);
    urlParam.searchParams.set(key, value);
    window.history.pushState({}, '', urlParam);
}


function activeParentByItem(parentClass, childrenClass) {
    $(parentClass).removeClass('active');
    $(parentClass).addClass(function(index) {
        let hasChidrenActive = document.querySelectorAll(parentClass)[index].querySelector(`${childrenClass}.active`);
        if (hasChidrenActive ) {
            return 'active';
        }
        return '';
    });
}