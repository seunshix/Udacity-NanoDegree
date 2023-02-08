$(document).ready(function(){
    $('img').click(function(){
        $('h1').text('A photo of an Amazing View');
    })
});

$(document).ready(function(){
    $('body').hide().fadeIn('slow');
});

$(document).ready(function(){
    $('h1').click(function(){
        $('img').fadeOut('slow');
    })
});