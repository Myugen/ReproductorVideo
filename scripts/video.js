function Reproduccion(elem) {
    if (elem.hasClass("fa-play")) {
        $("#video")[0].play();
    } else {
        $("#video")[0].pause();
    }
    elem.addClass(function(index, currentClass) {
        var addedClass;
        if (currentClass === "fa fa-play fa-lg") {
            $(this).removeClass("fa fa-play fa-lg");
            addedClass = "fa fa-pause fa-lg";
        } else {
            $(this).removeClass("fa fa-pause fa-lg");
            addedClass = "fa fa-play fa-lg";
        }
        return addedClass;
    });
}

$(document).ready(function(){
    $("#thumbnails div img").click(function(){
        $("img.selected").removeClass("selected");
        $(this).addClass("selected");
        var dataVideo = $(this).data("video");
        var videoSrc = "0";
        switch(dataVideo) {
            case 1:
                videoSrc = "sources/media/STEAMPUNK_FANTASY_GALILEO(720p).mp4";
                break;
            case 2:
                videoSrc = "sources/media/Roadkill_Redemption(1080p).mp4";
                break;
        }
        $("#video source").attr("src", videoSrc);
        $("#video")[0].load();
    });
    $("#reproductor").hover(function(){
        $("#controles").slideToggle();
    });
    $("#play").click(function(){Reproduccion($(this))});
    $("#video").click(function(){Reproduccion($("#play"))});
    $("#fastBackward").click(function(){

    });
    $("#backward").click(function(){

    });
    $("#fastForward").click(function(){

    });
    $("#forward").click(function(){

    });
    $("#stop").click(function(){

    });
});
