$(function(){
    $('button').click(function(){
        var $message = $('input').val();
        $('ul').append('<li class = "list">' + $message + '</li>');
        $('li').toggleClass("list body");
    })
})