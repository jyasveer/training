$(document).ready(function () {
    // id selector
    var $listitem1 = $('#list-item');
    $listitem1.css('background', 'yellow');

    // class selector
    var $listItems = jQuery('.list-item');
    $listItems.css('font-style', 'italic').css('background', 'cyan');

    // class selector using native javascript
    var elementsWithClass = document.querySelectorAll('.list-item');
    console.log('native class selection -', elementsWithClass);
    elementsWithClass.forEach(function(element) {
        element.style.fontWeight = 'bold';
    });

    // tag selector
    var $liAll = $('li');
    $liAll.eq(3).css('list-style', 'none');

    // attribute selector
    var $listItems2 = $('[random]');
    $listItems2.css('background-color', 'red');

    // nth type selector
    var $fifthLi = $('li:eq(4)');
    // $fifthLi.hide();

    // task : to get the first level list items from the 2nd ul element
    var $li = $('ul:eq(1) > li:lt(2)');
    console.log($li);

    // first level selector
    var $firstLevelLis = $('ul:eq(0) > li');
    var $liFirst = $firstLevelLis[0];
    console.log($firstLevelLis);

    // :even selector
    $Evenlis = $('li:odd');
    $Evenlis.css('font-size', '40px');

    // selectors with spaces
    var $liWithClass = $('li.list-item');
    var $childrenOfLiWithClass = $('li .list-item');
    console.log($liWithClass, $childrenOfLiWithClass);
    // for the rest go to this link 
    // http://api.jquery.com/category/selectors/ 
    // https://developer.mozilla.org/en-US/docs/Web/API/Document
});