$(document).ready(function(){
    $('.parent .child:last-child .grandchild').css('background-color', 'green');

    $('.parent .child:nth-child(2) .grandchild').css('background-color', 'cyan');

    // lets traverse from GC - 6 to GC - 4
    var $gc6 = $('.parent .child:last-child .grandchild');
    // option 1
    $gc6.parent().parent().find('.child:first-child').find('.grandchild:nth-child(4)').css('border', '2px solid white');

    // option 2
    $($gc6.parent().siblings()[0]).find('.grandchild:nth-child(3)').css('border', '2px solid black');

    // you are at child-2. change the background color of all grandchilds in child-3
    $c2 = $('.parent > .child:eq(1)');
    $c2.next().children().css('background-color', 'brown');

    // closest
    var $gc3 = $('.parent > .child:eq(0) > .grandchild:eq(2)');
    console.log('closest parent with class random', $gc3.closest('.random'));
});