function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();

    // const arrays = trailer.classList;
    // for (const array of arrays) {
    //     if(!array.includes('active')) {
    //         video.pause();
    //     }
    // }
}