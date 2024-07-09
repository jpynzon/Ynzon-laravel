<template>
    <div id="home">
        <div class="hero-area py-5">
            <div class="container d-flex flex-wrap align-items-center justify-content-center">
                <div class="left-group me-lg-5">
                    <h1 class="area-title fw-bold mb-3">From Vision to Code:<br> Creativity Unleashed.</h1>
                    <a href="#about" class="btn btn-primary rounded-5 border-0 px-3 py-2">LEARN MORE</a>
                </div>
                <div class="right-group">
                    <img src="../../assets/images/hero.png" width="500px">
                </div>
            </div>
        </div>
    </div>

    <!--  <div id="about" class="media-area d-flex justify-content-center">
        <video id="myVideo" preload="metadata" autoplay loop height="500px">
            <source src="../../assets/images/creativity.mp4#t=1.75" type="video/mp4">
        </video>
    </div> -->

    <div class="company-area py-5 d-flex flex-column align-items-center text-center">
        <h6 class="compay-title fw-bold">#COMPANIES WHO TRUST US</h6>
        <div class="companies d-flex justify-content-center flex-wrap mt-3">
            <img src="../../assets/images/company1.png" alt="PASSAFUND" class="mx-3" height="100px">
            <img src="../../assets/images/company2.png" alt="PASSAFUND" class="mx-3" height="100px">
            <img src="../../assets/images/company3.png" alt="PASSAFUND" class="mx-3" height="100px">
            <img src="../../assets/images/company4.png" alt="PASSAFUND" class="mx-3" height="100px">
        </div>
    </div>

    <div id="about">
        <div class="about-area py-5 container d-flex justify-content-center align-items-center">
            <div class="left">
                <h2 class="about-title fw-bold mb-3">A Website that Fits Your Business</h2>
                <h6 class="desc" style="max-width: 80%; line-height: 2;">Whether you need a simple, informative
                    website or a more
                    complex
                    e-commerce platform, we can build, maintain, and secure a website that meets your requirements
                    and
                    exceeds your expectations.</h6>
            </div>
            <div class="right">
                <img src="../../assets/images/girl.png" height="400px">
            </div>
        </div>
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
@media only screen and (max-width: 1000px) {
    .about-area {
        flex-wrap: wrap;
    }
}

/* #myVideo {
    width: 100%;
    height: 500px;
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
} */
</style>
