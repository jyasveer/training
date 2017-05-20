$(document).ready(function(){
    var $accordion = $('.accordion');
    $accordion.find('.panel-heading').click(function(event){
        $accordion.find('.panel-collapse').slideUp();
        $(this).next().slideDown();
    });
});