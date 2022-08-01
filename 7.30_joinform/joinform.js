$(document).ready(function(){
    $(".joinbtn").click(() => {

    
        if($(".id").val() == ""){
            alert("아이디를 입력하세요");
            $(".id").focus();
            return false;
        }else if($(".pass").val() == ""){
            alert("비밀번호를 입력하세요");
            $(".pass").focus();
            return false;
        }else if($(".checkspass").val() == ""){
            alert("비밀번호를 확인하세요");
            $(".checkspass").focus();
            return false;
        }else if($(".name").val() == ""){
            alert("이름을 입력하세요");
            $(".name").focus();
            return false;
        }else if(checkcount("gender") == 0){
            alert("성별을 선택해 주세요");
            return false;
        }else if($(".email1").val() == ""){
            alert("이메일을 입력하세요");
            $(".email1").focus();
            return false;
        }else if($(".email2").val() == ""){
            alert("이메일 주소를 입력하세요");
            $(".email2").focus();
            return false;
        }else if($(".addr1").val() == ""){
            alert("주소를 입력하세요");
            $(".addr1").focus();
            return false;
        }else if($(".addr2").val() == ""){
            alert("상세한 주소를 입력하세요");
            $(".addr2").focus();
            return false;
        }else if(checkcount("hp") == 0){
            alert("통신사 선택해 주세요");
            return false;
        }else if($(".phone1").val() == ""){
            alert("전화번호 앞자리를 선택해 주세요");
            $(".phone1").focus();
            return false;
        }else if($(".phone2").val() == ""){
            alert("전화번호를 입력하세요");
            $(".phone2").focus();
            return false;
        }else if($(".phone3").val() == ""){
            alert("전화번호를 입력하세요");
            $(".phone3").focus();
            return false;
        }else if(checkcount("hobby") == 0){
            alert("취미를 선택하세요");
            return false;
        }else{
            joinForm.submit();
        }

        function checkcount(name){
            const count = $("input[name='"+name+"']:checked").length;
 
            return count;

        }
    }),
    $(".email3").change(function(){
        const e3 = $(this).val();
        const e2 = $(".email2");
        if(e3 == "self"){
            e2.val("");
        }else{
            e2.val(e3);
        }
    }),

    $(".checkspass").blur(function(){
        const cpass = $(this).val();
        const pass = $(".pass").val();
        if(cpass != "" || pass != ""){
            if(cpass == pass){
                $(".passmsg").text("비밀번호가 일치합니다");
                $(".passmsg").css("font-size","14px").css("color","blue");
            }else{ 
                $(".passmsg").text("비밀번호가 일치하지 않습니다. 확인 후 다시 입력바랍니다");
                $(".passmsg").css("font-size","14px").css("color","red");
            }
        }

    });
});