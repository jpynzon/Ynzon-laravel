<template>
    <div id="home">
        <div class="hero-area mt-5">
            <div class="container d-flex flex-wrap align-items-center justify-content-center">
                <div class="left-group me-lg-5">
                    <h1 class="area-title fw-bold mb-3">Grow your business <br> with Creativity.</h1>
                    <a href="#about" class="btn btn-primary bg-blue rounded-5 border-0 px-3 py-2">LEARN MORE</a>
                </div>
                <div class="right-group">
                    <img src="../../assets/images/computer.png" width="500px">
                </div>
            </div>
        </div>
    </div>

    <div id="about" class="media-area d-flex justify-content-center">
        <video id="myVideo" preload="metadata" autoplay loop height="500px">
            <source src="../../assets/images/creativity.mp4#t=1.75" type="video/mp4">
        </video>
    </div>

    <div class="about-area py-5 d-flex flex-column align-items-center text-center">
        <h3 class="area-title fw-bold">Unlock Your Imagination: 3 Apps, Endless Creativity.</h3>
        <h5 class="desc w-50">Creativity knows no bounds. Transform selfies, direct movies, and design logos with our
            powerful tools. At Creativity, there’s no end to what you can do.</h5>
    </div>
</template>

<script>
export default {
    name: 'Content',
};

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('myVideo');

    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
</script>

<style scoped>
#myVideo {
    width: 100%;
    /* Set the width to 100% of the container */
    height: 500px;
    /* Set the height to 500px */
}

#myVideo::-webkit-media-controls {
    display: none !important;
}

#myVideo::-webkit-media-controls-enclosure {
    display: none !important;
}

#myVideo::-webkit-media-controls-panel {
    display: none !important;
}

#myVideo:hover {
    cursor: pointer;
}
</style>
