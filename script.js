const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
