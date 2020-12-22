/*
 * IntersectionObserver API
 * Callback params
 * Options: root, rootMargin, threshold
 *
 * https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API
 */

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Box ${entry.target.textContent} пересекает Root`);

      observer.disconnect();
    }
  });
};

const options = {
  rootMargin: '100px',
};

const io = new IntersectionObserver(onEntry, options);

const boxRef = document.querySelector('.js-box');

io.observe(boxRef);

//=====================================================

const images = document.querySelectorAll('.feed img');

const options = {
  rootMargin: '100px',
};

const onEntry = (entries, observer) => {
  console.log('🐷');

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;

      image.src = src;
      image.classList.add('appear');

      observer.unobserve(image);
    }
  });
};

const io = new IntersectionObserver(onEntry, options);

images.forEach(image => io.observe(image));
