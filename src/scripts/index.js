import '../styles/main.css';
import './component/navigation-bar/app-bar';
import './component/hero/hero';
import './component/restaurants/restaurant-list';
import './component/footer-bar/footer';
import 'regenerator-runtime'; /* for async await transpile */

const menuButton = document.querySelector('#humberger');
const navigationMenu = document.querySelector('.app-bar_navigation');

menuButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('open');
});

// Untuk menutup menu navigasi jika di luar area menu
document.addEventListener('click', (event) => {
  if (!navigationMenu.contains(event.target) && !menuButton.contains(event.target)) {
    navigationMenu.classList.remove('open');
  }
});
document.querySelector('.skip-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#main-content').focus();
});
