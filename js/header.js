new WOW().init();

$("#nav-contents").loadTemplate("templates/nav-contents.html", nav_contents);
$(document).on('click','.nav-items',function(){
    let a;
    if($(this).text()=="Home"){
        animation();
        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/homepage.html");
        },1000)
        // a.addEventListener('animationend', () => {
        //     console.log("home");
        //     $("#body").loadTemplate("templates/homepage.html");
        // });
    } 
    else if($(this).text()=="Services")
    {
        animation();
        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/services.html");
        },1000)
        // a.addEventListener('animationend', () => {
        //     console.log("service");

        //     $("#body").loadTemplate("templates/services.html");
        // });
        
    } 
    else if($(this).text()=="Our Projects")
    {        
        animation();
        setTimeout(function(){
            $("#body").empty();

            $("#body").loadTemplate("templates/our-projects.html");
        },1000)
        // a.addEventListener('animationend', () => {
        //     console.log("project");

        //     $("#body").loadTemplate("templates/our-projects.html");
        // });
    } 
    else if($(this).text()=="Lets Work")
    {
        animation();
        
        setTimeout(function(){
            $("#body").empty();
            $("#body").loadTemplate("templates/lets-work.html");
        },1000)
    }
})

function animation(){
    if($("#homepage").length){
        homepage_exit();
        a = document.querySelector('.homepage-left-column');
    } else if($("#services").length){
        servicepage_exit();
        a = document.querySelector('.service-box');
    } else if($("#projects").length){
        projectspage_exit();
        a = document.querySelector('.project-box');
    } else if($("#lets-work").length){
        letswork_exit();
        a = document.querySelector('.phone-number');
    }
}

function homepage_exit(){
    $(".homepage-left-column").removeClass('animate__animated animate__rotateInDownLeft')
    $(".homepage-left-column").addClass('animate__animated animate__rotateOutDownLeft')
    $(".homepage-right-column").removeClass('animate__animated animate__rotateInUpRight')
    $(".homepage-right-column").addClass('animate__animated animate__rotateOutUpRight')
}

function servicepage_exit(){
    $(".service-box").removeClass('animate__animated animate__fadeInUp')
    $(".service-box").addClass('animate__animated animate__fadeOutUp')
}

function projectspage_exit(){
    $(".project-box").removeClass('animate__animated animate__fadeInUp')
    $(".project-box").addClass('animate__animated animate__fadeOutUp')
}

function letswork_exit(){
    $(".phone-number").removeClass('animate__animated animate__fadeInLeft')
    $(".phone-number").addClass('animate__animated animate__fadeOutRight')
    $(".mail").removeClass('animate__animated animate__fadeInLeft')
    $(".mail").addClass('animate__animated animate__fadeOutRight')
    $(".facebook").removeClass('animate__animated animate__fadeInLeft')
    $(".facebook").addClass('animate__animated animate__fadeOutRight')
    $(".instagram").removeClass('animate__animated animate__fadeInLeft')
    $(".instagram").addClass('animate__animated animate__fadeOutRight')
    $(".medium").removeClass('animate__animated animate__fadeInLeft')
    $(".medium").addClass('animate__animated animate__fadeOutRight')
    $("#map").removeClass('animate__animated animate__fadeIn')
    $("#map").addClass('animate__animated animate__fadeOut')
}