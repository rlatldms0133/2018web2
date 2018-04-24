$(document).ready(function(){

    var c=0;
    var inter;
    var c2=0;
    var inter2;

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
    function next(){
        inter2 = setInterval(function(){
            if(c2>=1200) {
                $("#sub_box").animate({left:"0"});
                c2 = 0;
            }
            else{
                $("#sub_box").animate({left:"-=400"});
                c2+=400;
            }
        },2000)
    }

    slider();
    next();


    $("#table_1").click(function () {
        $("#click_table1").css({"display" : "block"});
        $("#click_table2").css({"display" : "none"});
        $("#table_1").css({"color":"#393F2B"});
        $("#table_2").css({"color":"#687859"});
    })
    $("#table_2").click(function () {
        $("#click_table1").css({"display" : "none"});
        $("#click_table2").css({"display" : "block"});
        $("#table_1").css({"color":"#687859"});
        $("#table_2").css({"color":"#393F2B"});
    })

});