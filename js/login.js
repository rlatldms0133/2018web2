$(document).ready(function(){

    var c=0;
    var inter;

    function slider(){
        inter = setInterval(function(){
            if(c>=3000) {
                $("#main_slider > #img_box").animate({left:"0"});
                c = 0;
            }
            else{
                $("#main_slider > #img_box").animate({left:"-=1000"});
                c+=1000;
            }
        },2500)
    }
    slider();

    $("#login_btn").click(function () {
        location.reload();
    })
});