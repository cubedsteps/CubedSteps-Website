
$(document).ready(function(){
    var testimonial_box = $(".testimonial-box");
    var why_us_box = $(".why-us-box");    

    //left-side transitions
    testimonial_box.each(function(){
        $(this).click(function(){
        if($(this).hasClass('testimonial-box-click')==false){            
            $(this).addClass('testimonial-box-click');
            $('.testimonial-content').addClass('testimonial-content-show');
            // $(this + ' .testimonial-content').addClass('testimonial-content-show');
        }else if($(this).hasClass('testimonial-box-click')==true){
            $(this).removeClass('testimonial-box-click');
            $('.testimonial-content').removeClass('testimonial-content-show');
        }
        })
    });

    //why-us transition
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

    // services page
    $('.show-more').click(function(){
        if($(this).hasClass('show-more-click')==false){
            $(this).addClass('show-more-click');
            $('.service-description').slideToggle();
        } else if($(this).hasClass('show-more-click')==true){
            $(this).removeClass('show-more-click');
        }
    })

})


