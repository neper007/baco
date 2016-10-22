        var myVideo;

        window.onload = function () {
            myVideo = document.getElementById("myVideoFile");
//            myVideo.style.visibility = "hidden";
            btnfullMode.addEventListener("click", setFullScreenMode, false);
            btnGoBack.addEventListener("click", goBack, false);
            
//            video.addEventListener("loadedmetadata", makeFullModeVisible, false);
//            myVideo.addEventListener("loadedmetadata", makeFullModeVisible, false);
            
        }

        function makeFullModeVisible() {
            if (myVideo.webkitSupportsFullscreen) {
                document.getElementById("btnfullMode").style.visibility = "visible";
/*                window.onresize = function (event) {
                    makeVideoHidden();
                }*/
            }
        }

        function setFullScreenMode() {
//            myVideo.webkitEnterFullscreen();
            myVideo.webkitRequestFullscreen();
            myVideo.style.visibility = "visible";
            myVideo.play();
            myVideo.style.transition = "all 2s";
//            video_container.addEventListener("resize", makeVideoHidden, false);
        }
        
        function makeVideoHidden() {
            myVideo.style.visibility = "hidden";
            myVideo.pause();
        }
        
/*        myVideo.onresize = function() {
            myVideo.style.visibility = "hidden";
        }*/
        
//        addResizeListener(myVideoFile, makeVideoHidden);

    function goBack() {
    window.history.back();
}