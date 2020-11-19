
$(document).ready(function(){
    var side_box = $(".side-box");
    side_box.each(function(){
        $(this).click(function(){
        if($(this).hasClass('side-box-click')==false){
            $(this).addClass('side-box-click testimonial-box-click why-us-box-click');
            console.log($(this + '.testimonial-box'));
        }else if($(this).hasClass('side-box-click')==true){
            $(this).removeClass('side-box-click testimonial-box-click why-us-box-click');
        }
        })
    });
    $('.show-more').click(function(){
        if($(this).hasClass('show-more-click')==false){
            $(this).addClass('show-more-click');
            $('.service-description').slideToggle();
        } else if($(this).hasClass('show-more-click')==true){
            $(this).removeClass('show-more-click');
        }
    })

})


