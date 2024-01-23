document.addEventListener('DOMContentLoaded', () => {
  addNoindex();
});
const addNoindex = () => {
  const head = document.querySelector('head');
  const meta = document.createElement('meta');
  const testClass = document.querySelector('.test');

  meta.setAttribute('name', 'robots');
  meta.setAttribute('content', 'noindex');

  window.addEventListener('load', () => {
    if (testClass) {
      console.log(meta);

      head?.appendChild(meta);
    }
  });
};
