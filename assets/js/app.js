
$("li").click(function(){
    $(this).toggleClass("completed");
})

$("span").click(function(event){
    $(this).parent().fadeOut();

    //Stops event from bubbling up wont continue up op
})