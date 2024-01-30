document.addEventListener("DOMContentLoaded", function () {
    // Get all video elements
    const videos = document.querySelectorAll("video");

    // Add event listeners for hover
    videos.forEach(video => {
        video.addEventListener("mouseover", function () {
            playVideo(video);
        });

        video.addEventListener("mouseout", function () {
            pauseVideo(video);
        });
    });
});

function playVideo(video) {
    if (!video.paused) return;
    video.play();
}

function pauseVideo(video) {
    video.pause();
}
