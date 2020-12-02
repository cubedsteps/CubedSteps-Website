$("#right-side").loadTemplate("templates/right-side.html", {}, {
    success: function(data){
        right_side_animation();
        
    },
    error: function(err) {
        console.log(err);
    }
});

function right_side_animation(){
    var why_us_box = $(".why-us-box"); 
    why_us_box.click(function(){
        if($(this).hasClass('why-us-box-click')==false){
            $(this).addClass('why-us-box-click');
            $('.why-us-heading').css('display','none');
            $('.why-us-all-contents').css('display','block');
        } else if($(this).hasClass('why-us-box-click')==true){
            $(this).removeClass('why-us-box-click');
            $('.why-us-heading').css('display','block');
            $('.why-us-all-contents').css('display','none');
        }
    })
}