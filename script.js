const animated = document.querySelectorAll(␊
  '[data-animate], [data-pop], .card, .feature__media video, .card video'␊
);␊
␊
const observer = new IntersectionObserver(␊
  entries => {␊
    entries.forEach(entry => {␊
      if (entry.isIntersecting) {␊
        entry.target.classList.add('is-visible');␊
        if (entry.target.tagName === 'VIDEO') {␊
          entry.target.play().catch(() => {});␊
        }␊
      }␊
    });␊
  },␊
  { threshold: 0.35 }␊
);␊
␊
animated.forEach(el => observer.observe(el));␊
␊
const toggleButtons = document.querySelectorAll('.play-toggle');␊
␊
toggleButtons.forEach(button => {␊
  const video = button.previousElementSibling;␊
  button.addEventListener('click', () => {␊
    if (video.paused) {␊
      video.play();␊
      button.querySelector('span').textContent = 'pause';␊
    } else {␊
      video.pause();␊
      button.querySelector('span').textContent = 'play';␊
    }␊
  });␊
});␊
␊
const cards = document.querySelectorAll('.card video');␊
cards.forEach(video => {␊
  video.addEventListener('mouseenter', () => video.play());␊
  video.addEventListener('mouseleave', () => video.pause());␊
});
