const animated = document.querySelectorAll(
  '[data-animate], [data-pop], .card, .feature__media video, .card video'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (entry.target.tagName === 'VIDEO') {
          entry.target.play().catch(() => {});
        }
      }
    });
  },
  { threshold: 0.35 }
);

animated.forEach(el => observer.observe(el));

const toggleButtons = document.querySelectorAll('.play-toggle');

toggleButtons.forEach(button => {
  const video = button.previousElementSibling;
  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      button.querySelector('span').textContent = 'pause';
    } else {
      video.pause();
      button.querySelector('span').textContent = 'play';
    }
  });
});

const cards = document.querySelectorAll('.card video');
cards.forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});
const animated = document.querySelectorAll(
  '[data-animate], [data-pop], .card, .feature__media video, .card video'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (entry.target.tagName === 'VIDEO') {
          entry.target.play().catch(() => {});
        }
      }
    });
  },
  { threshold: 0.35 }
);

animated.forEach(el => observer.observe(el));

const toggleButtons = document.querySelectorAll('.play-toggle');

toggleButtons.forEach(button => {
  const video = button.previousElementSibling;
  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      button.querySelector('span').textContent = 'pause';
    } else {
      video.pause();
      button.querySelector('span').textContent = 'play';
    }
  });
});

const cards = document.querySelectorAll('.card video');
cards.forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());
});

const langToggleButtons = document.querySelectorAll('.lang-toggle button');
const langViews = document.querySelectorAll('.lang-view');
const navLinks = document.querySelectorAll('.nav-links a[data-href-en]');

const setLanguage = lang => {
  document.documentElement.setAttribute('lang', lang);

  langToggleButtons.forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  langViews.forEach(view => {
    view.classList.toggle('is-active', view.dataset.lang === lang);
  });

  navLinks.forEach(link => {
    const href = link.dataset[`href${lang.toUpperCase()}`];
    const label = link.dataset[`label${lang.toUpperCase()}`];
    if (href) link.setAttribute('href', href);
    if (label) link.textContent = label;
  });
};

if (langToggleButtons.length) {
  langToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });

  setLanguage('en');
}
