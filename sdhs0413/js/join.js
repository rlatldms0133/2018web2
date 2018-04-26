$(document).ready(function (){
    $(".imforma_write").submit(function (){
    if($("#pw").val() != $("#re_pw").val()){
        alert("비밀번호 재확인 같지 않습니다.");
        return false;
    }else if ($("#pw").val() == $("#re_pw").val()){
        alert("회원가입완료");
    }

})
})