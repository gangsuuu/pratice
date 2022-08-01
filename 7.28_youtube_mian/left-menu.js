$(document).ready(function(){
    $(".menu-button").click(function(){
        //button을 클릭해서 mnue-list를 호출 할 수 있게 이벤트 추가
        const close = $(".mid-list");
        const open = $(".mid-list-detail");
        
        if(close.css("display") == "block"){
            open.css("display","block");
            close.css("display","none");
        }else{
            open.css("display","none");
            close.css("display","block");
        }
        
        //menu-list 와이드방향으로 작동하며 slide하듯 연출
    }),//menu-button.click - end
    $(".playlist-open").click(function(){
        $(".playlist").show();
        $(this).hide();
    }),//.playlist.click - end
    $(".playlist-close").click(function(){
        $(".playlist").hide();
        $(".playlist-open").show();
    });
});//document.read - end
