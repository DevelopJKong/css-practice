function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    const nodes = trailer.classList;
    for (const node of nodes) {
        video.play();
        !node.includes('active') && video.pause();
    }
}