
$("#left-side").loadTemplate("templates/left-side.html", {}, {
    success: function(data){
        left_side_animation();
        
    },
    error: function(err) {
        console.log(err);
    }
});


function left_side_animation(){
    var testimonial_box = $(".testimonial-box");
        $('.testimonial-box').click(function(){
            for (var i = 0; i<testimonial_box.length; i++){
                testimonial_box[i].setAttribute("data-clicked", "false");
            }
            $(this).attr("data-clicked","true");
            for (var i = 0; i<testimonial_box.length; i++){
                if(testimonial_box[i].getAttribute("data-clicked")==="true"){      
                    $(testimonial_box[i]).toggleClass('testimonial-box-click');
                    $(testimonial_box[i]).find('.testimonial-content').toggleClass('testimonial-content-show');
                }else{
                    $(testimonial_box[i]).removeClass('testimonial-box-click');
                    $(testimonial_box[i]).find('.testimonial-content').removeClass('testimonial-content-show');
                }
            }
        })
}