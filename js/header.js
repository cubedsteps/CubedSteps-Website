$("#nav-contents").loadTemplate("templates/nav-contents.html", nav_contents);
$('.nav-items').click(function(){
    if($(this).text()=="Home"){
        $("#body").loadTemplate("templates/homepage.html");
    } 
    else if($(this).text()=="Services")
    {
        $("#body").loadTemplate("templates/services.html");
    } 
    else if($(this).text()=="Our Projects")
    {        
        $("#body").loadTemplate("templates/our-projects.html");
    } 
    else if($(this).text()=="Lets Work")
    {
        $("#body").loadTemplate("templates/lets-work.html");
    }
})