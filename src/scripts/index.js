import '../styles/main.css';
import './component/navigation-bar/app-bar';
import './component/hero/hero';
import './component/footer-bar/footer';
import 'regenerator-runtime'; /* for async await transpile */
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#humberger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

app.renderSkeletonLoad();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

document.querySelector('.skip-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#maincontent').focus();
});
