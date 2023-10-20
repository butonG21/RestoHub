import '../styles/main.css';
import './component/navigation-bar/app-bar';
import './component/hero/hero';
import './component/restaurants/restaurant-list';
import './component/footer-bar/footer';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';

const app = new App({
  button: document.querySelector('#humberger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.querySelector('.skip-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#main-content').focus();
});
