$(document).ready(function(){

    wWidth = $(window).innerWidth();
    wHeight = $(window).innerHeight();
    hHeight = $("header").innerHeight();
    fHeight = $("footer").innerHeight();

    $(window).resize(function(){
        wWidth = $(window).innerWidth();
        wHeight = $(window).innerHeight();
        hHeight = $("header").innerHeight();
        fHeight = $("footer").innerHeight();
    })

    //nav event
    $(window).resize(function(){
        if(wWidth < 1201) {
            $("nav").hide();
            $("nav").css("height", wHeight);
            $(".menuBtn.open").click(function(){
                $("nav").show();
            });
            $(".menuBtn.close").click(function(){
                $("nav").hide();
            });
        } else {
            $("nav").show();
            $("nav").css("height", "auto");
        }
    })

    //gatemenu
    $(window).resize(function(){
        if(wWidth < 1201) {
            $(".gateMenu").css("height","auto");
        } else{
            $(".gateMenu").css("height", wHeight - hHeight - fHeight);
        }
    });
    $(window).trigger("resize");

    // popup event
    $(".popupMask, .popup .closeBtn").click(function(){
        $("body").removeClass("fixed");
        $(this).parents(".popupBox").hide();
    });

    /* $(".projectSt .thumbBox li").click(function(){
        $("body").addClass("fixed");
        $(".popupBox").show();

        if($(this).hasClass("movPj")) {
            $(".popupPj .movBox").show();
        } else {
            $(".popupPj .movBox").hide();
        }
    }); 0618 zoe 삭제 */
});


/*** 문자열이 빈 문자열인지 체크하여 기본 문자열로 리턴한다.
* @param str           : 체크할 문자열
* @param defaultStr    : 문자열이 비어있을경우 리턴할 기본 문자열
***/
var univNvl = function (str, defaultStr){
    if(typeof str == "undefined" || str == null || str == "")
    str = defaultStr ;

    return str ;
}