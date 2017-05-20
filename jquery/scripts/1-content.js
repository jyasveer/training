// Basics
// Selectors
// Some filters for selectors
    // 1 $('div.foo').has('p'); // div.foo elements that contain <p>'s
    // 2 $('h1').not('.bar'); // h1 elements that don't have a class of bar
    // 3 $('ul li').filter('.current'); // unordered list items with class of current
    // 4 $('ul li').first(); // just the first unordered list item
    // 5 $('ul li').eq(5); // the sixth
    // .find()

// Selecting form elements
    // :button
    // :checkbox
    // :checked
    // :disabled
    // :enabled
    // :file
    // :image
    // :input
    // :password
    // :radio
    // :selected
    // :submit
    // :text

// Chaining after you select
    // use end() method
    // chain wisely

// CSS
    // .css() as getter and setter
    // .addClass()
    // .removeClass()
    // .toggleClass()
    // .hasClass()

// Attributes
    // .attr() as getter and setter

// Traversing
    // .next()
    // .previous()
    // .parent()
    // .siblings()
    // .children()
    // .closest()
    // .each() for iteration

// Manipulation
    // .html() as getter and setter
    // .attr()
    // .text()
    // .val()


// Moving, Copying and Removing Elements
    // two approaches to do
    // .insertAfter() and .after()
    // .insertBefore() and .before()
    // .appendTo() and .append()
    // .prependTo() and .prepend()
    // choose what to use and see the return value is each case
    // .clone() - pass true to copy data and events

// Removing elements
    // .remove() - removes the element from the page
    // .detach() - same like remove but it also stores the data and events
    // .empty() - keep the element but empty the contents

// Create new elements

// $ vs $()
    // $() is fn namespace
    // $ is a utility object

// $ object and apis
    // $.trim()
    // $.each()
    // $.inArray()
    // $.extend() - can use empty object as the first argument
    // $.proxy()
    // Checking types
        // $.isFunction()
        // $.isPlainObject()
        // $.isArray()
    