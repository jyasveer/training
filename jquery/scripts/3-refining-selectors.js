$(document).ready(function () {
    var $lis = $('li');

    // not api
    var $lisWithNoClass = $lis.not('.list-item');
    console.log($lis);
    console.log($lisWithNoClass);

    // children
    var $parent = $('li:eq(3)')
    console.log($parent);
    var $children = $parent.children();
    console.log('children -', $children);
    var $childrenOfUl = $($children[0]).children().splice(0, 2);
    console.log($childrenOfUl);

    // find
    console.time('time1');
    var $liWithRandom = $('ul:eq(0) li[random=hello]:eq(1)');
    console.timeEnd('time1');
    console.time('time2');
    var $liWithRandom2 = $('ul').first().find('li[random=hello]').eq(1);
    console.timeEnd('time2');
    
    console.log($liWithRandom);
    console.log($liWithRandom2);

    // first
    // last

    // filter
    var $lis = $('li');
    console.log('li with list-item class');
    console.log($lis.filter('.list-item'));

    // closest
    // var $grandLi = $('.grand-list-item');
    // console.log('closest parent having attribute random');
    // console.log($grandLi.first().closest('[random]'));
});