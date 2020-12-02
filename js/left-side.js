// console.log("left-side");
$("#left-side").loadTemplate("templates/left-side.html", {}, {
    success: function(data){
        console.log('success');
        var testimonial_box = $(".testimonial-box");
        var why_us_box = $(".why-us-box");   
    
        $(document).on('click','.testimonial-box',function(){
            // debugger;
            console.log('click');
            for (var i = 0; i<testimonial_box.length; i++){
                testimonial_box[i].setAttribute("data-clicked", "false");
            }
            // debugger;
            $(this).attr("data-clicked","true");
            for (var i = 0; i<testimonial_box.length; i++){
                if(testimonial_box[i].getAttribute("data-clicked")==="true"){      
                    $(testimonial_box[i]).toggleClass('testimonial-box-click');
                    $(testimonial_box[i]).find('.testimonial-content').toggleClass('testimonial-content-show');
                }else{
                    $(testimonial_box[i]).removeClass('testimonial-box-click');
                    $(testimonial_box[i]).find('.testimonial-content').removeClass('testimonial-content-show');
                }
                // $(testimonial_box[i]).toggleClass('testimonial-box-click');
                // $(testimonial_box[i]).find('.testimonial-content').toggleClass('testimonial-content-show');
            }
        })
    },
    error: function(err) {
        console.log('err');
    }
});
// console.log($('*'));
// console.log($(document).find('.testimonial_box'))


