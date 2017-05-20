$(document).ready(function () {
    var $parent = $('.parent');
    var $gcClone = $parent.find('.child:first-child .grandchild:first-child').clone();

    // get gc-5 anc add a string hello to the existing text
    var $gc5 = $parent.find('.child:eq(1) > .grandchild');
    $gc5.text($gc5.text() + ' hello !');

    // html property
    var $c4 = $parent.find('.child:last-child');
    $c4.html('Child 4 <div class="grandchild">GC - 7</div>');

    // add a gc after gc -7
    $gc7 = $c4.find('.grandchild:first-child');

    // after()
    console.log($gc7.after($gcClone.text('GC - 9')));

    // insertAfter()
    console.log($('<div class="grandchild">GC - 8</div>').insertAfter($gc7));

    // append()
    // add a new grand child to child 4
    console.log($c4.append('<div class="grandchild">GC - 10</div>'));

    // appendTo()
    console.log($('<div class="grandchild">GC - 11</div>').appendTo($c4).data('obj', {
        name: 'abc'
    }));


    // remove grandchild 11
    $gc11 = $parent.find('.child:eq(3) .grandchild:last-child');
    $gc11 = $gc11.remove(); // use detach() here to get the data object when you add it again
    console.log('$gc11 -', $gc11);
    $parent.find('.child:eq(3)').append($gc11);
    console.log($parent.find('.child:eq(3) .grandchild:last-child').data());

    // empty the grandchild of child3 but keep the text fot itself
    $c3 = $parent.find('.child:nth-child(3)');
    var $c3Text = $c3.children().first().text();
    $c3.empty().text($c3Text);
});