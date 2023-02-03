$(document).ready(function() {

    let AboutUsHeight = $("#AboutUs").offset().top;


    $(window).scroll(function() {
        let x = $(window).scrollTop();
        if (x > AboutUsHeight) {
            $("#Navbar").css("backgroundColor", "rgba(0,0,0,.5)");
            $(".navbar-nav").css("paddingTop", "0px")

        } else {
            $("#Navbar").css("backgroundColor", "transparent");

        }
    });




});

$(".nav-item .nav-link").click(function() {


    let Href = $(this).attr("href");
    let heig = $(Href).offset().top;
    $("body, html").animate({ scrollTop: heig }, 1000, function() {});

});







/**************************** */


$(".navbar .nav-link").click(function() {

    $(".navbar .nav-link").removeClass("active")
    $(this).addClass("active");
})


/**                          button effect  */


$('.from-left').hover(function() {
        $(this).find('span').eq(0).animate({
            width: '100%'
        }, 200);


    },
    function() {

        $(this).find('span').eq(0).animate({
            width: '0'
        }, 200);

    });




$('.progress .progress-bar').each(function() {

    $(this).animate({
        width: $(this).attr('data-progres')
    }, 1000)

});


// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

/*   End counter ***/


/* =======>   counter  <========= */

let counts=document.querySelectorAll(".sect span");

counts.forEach((num)=>{
    startCount(num);
})

function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },5000/goal)

};
