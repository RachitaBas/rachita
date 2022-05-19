//typing animation script
var typed = new Typed(".typing",{
    strings:["Blogger","Developer","Freelancer"],
    typeSpeed:70,
    backSpeed:90,
    loop:true
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }
        else{
            $('.navbar').removeClass("sticky");



        }
        })
    });
