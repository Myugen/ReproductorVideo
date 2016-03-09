function reiniciarControles() {
    $("#video").prop("muted", false);
    if ($("#play").hasClass("fa-pause")) {
        $("#play").removeClass("fa fa-pause fa-lg");
        $("#play").addClass("fa fa-play fa-lg");
    }
    if ($("#mute").hasClass("fa-volume-off")) {
        $("#mute").removeClass("fa fa-volume-off fa-lg");
        $("#mute").addClass("fa fa-volume-up fa-lg");
    }
    if ($("#loop").hasClass("fa-spin")) {
        $("#loop").removeClass("fa-spin");
        $("#loop").unbind("ended");
    }
}

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

function Skip(value) {
    $("#video")[0].currentTime += value;
}

$(document).ready(function(){
    //Init Video controls
    $("#video").prop("muted", false);
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
        reiniciarControles();
    });
    $("#reproductor").hover(function(){
        $("#controles").slideToggle();
    });
    $("#play").click(function(){Reproduccion($(this))});
    $("#video").click(function(){Reproduccion($("#play"))});
    $("#fastBackward").click(function(){
        Skip(-10);
    });
    $("#fastForward").click(function(){
        Skip(10);
    });
    $("#stop").click(function(){
        $("#video")[0].currentTime = 0;
        $("#video")[0].stop();
    })
    $("#mute").click(function(){
        if (!$("#video").prop("muted")) {
            $("#video").prop("muted", true);
        } else {
            $("#video").prop("muted", false);
        }
        $(this).addClass(function(index, currentClass){
            var addedClass;
            if (currentClass === "fa fa-volume-up fa-lg") {
                $(this).removeClass("fa fa-volume-up fa-lg");
                addedClass = "fa fa-volume-off fa-lg";
            } else {
                $(this).removeClass("fa fa-volume-off fa-lg");
                addedClass = "fa fa-volume-up fa-lg";
            }
            return addedClass;
        });
    });
    $("#loop").click(function(){
        if (!$(this).hasClass("fa-spin")) {
            $("#video").on("ended", function(){
                $("#video")[0].currentTime = 0;
                $("#video")[0].play();
            });
        } else {
            $("#video").unbind("ended");
        }
        $(this).addClass(function(index, currentClass) {
            var addedClass;
            if(currentClass === "fa fa-refresh fa-lg fa-spin") {
                $(this).removeClass("fa fa-refresh fa-lg fa-spin");
                addedClass = "fa fa-refresh fa-lg";
            } else {
                $(this).removeClass("fa fa-refresh fa-lg");
                addedClass = "fa fa-refresh fa-lg fa-spin";
            }
            return addedClass;
        });
    });
    $("#fullscreen").click(function(){
        if ($("#video")[0].requestFullscreen) {
            $("#video")[0].requestFullscreen();
        }
        if ($("#video")[0].msRequestFullscreen) {
            $("#video")[0].msRequestFullscreen();
        }
        if ($("#video")[0].mozRequestFullScreen) {
            $("#video")[0].mozRequestFullScreen();
        }
        if ($("#video")[0].webkitRequestFullscreen) {
            $("#video")[0].webkitRequestFullscreen();
        }
    });
});
